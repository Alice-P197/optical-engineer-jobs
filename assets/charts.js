window.refreshCharts = function(jobs) {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // ===== Chart 1: City Distribution (computed from jobs) =====
  var cityMap = {};
  jobs.forEach(function(j) {
    cityMap[j.city] = (cityMap[j.city] || 0) + 1;
  });
  var cityData = Object.keys(cityMap).map(function(c) {
    return {name: c, value: cityMap[c]};
  }).sort(function(a,b){return a.name.localeCompare(b.name,'zh');});

  var chart1El = document.getElementById('chart-city');
  var existing1 = echarts.getInstanceByDom(chart1El);
  if (existing1) existing1.dispose();
  var chart1 = echarts.init(chart1El,null,{renderer:'svg'});
  chart1.clear();
  chart1.setOption({
    animation:false,
    tooltip:{trigger:'axis',appendToBody:true,formatter:'{b}: {c} 个岗位'},
    grid:{left:'3%',right:'5%',top:'3%',bottom:'10%',containLabel:true},
    xAxis:{
      type:'category',axisLabel:{color:muted,fontSize:11,rotate:30},
      axisLine:{lineStyle:{color:rule}},data:cityData.map(function(d){return d.name;})
    },
    yAxis:{
      type:'value',name:'岗位数',nameTextStyle:{color:muted,fontSize:11},
      axisLabel:{color:muted,fontSize:11},axisLine:{lineStyle:{color:rule}},
      splitLine:{lineStyle:{color:rule}}
    },
    series:[{
      type:'bar',data:cityData.map(function(d){return d.value;}),
      itemStyle:{color:accent,borderRadius:[4,4,0,0]},
      barWidth:22,
      label:{show:true,position:'top',color:accent,fontSize:11,fontWeight:600}
    }]
  });
  window.addEventListener('resize',function(){chart1.resize();});

  // ===== Chart 2: Salary Comparison (computed from jobs) =====
  var salaryData = jobs.filter(function(j) {
    return j.sMax > 0;
  }).sort(function(a,b){return b.sMax - a.sMax;}).slice(0, 21).map(function(j) {
    return {city: j.city, company: j.company, min: j.sMin, max: j.sMax};
  });

  var chart2El = document.getElementById('chart-salary');
  var existing2 = echarts.getInstanceByDom(chart2El);
  if (existing2) existing2.dispose();
  var chart2 = echarts.init(chart2El,null,{renderer:'svg'});
  chart2.clear();
  chart2.setOption({
    animation:false,
    tooltip:{trigger:'item',appendToBody:true,formatter:function(p){var d=salaryData[p.dataIndex];return '<b>'+d.company+'</b><br/>'+d.city+'<br/>薪资区间：'+d.min+'K - '+d.max+'K';}},
    grid:{left:'3%',right:'18%',top:'3%',bottom:'6%',containLabel:true},
    xAxis:{type:'value',name:'K/月',nameTextStyle:{color:muted,fontSize:11},axisLabel:{color:muted,fontSize:11,formatter:'{value}K'},axisLine:{lineStyle:{color:rule}},splitLine:{lineStyle:{color:rule}},min:0,max:65},
    yAxis:{type:'category',data:salaryData.map(function(d){return d.company+' ('+d.city+')';}),axisLabel:{color:ink,fontSize:10,fontWeight:500},axisLine:{lineStyle:{color:rule}},inverse:true},
    series:[{
      type:'bar',data:salaryData.map(function(d){return{name:d.company+' ('+d.city+')',value:d.max};}),
      itemStyle:{color:accent,borderRadius:[4,4,0,0]},barWidth:16,
      label:{show:true,position:'right',formatter:function(p){var d=salaryData[p.dataIndex];return d.min+'K-'+d.max+'K';},color:muted,fontSize:10},
      emphasis:{itemStyle:{color:accent,shadowBlur:8,shadowColor:accent+'66'}}
    }]
  });
  window.addEventListener('resize',function(){chart2.resize();});

  // ===== Chart 3: Direction Distribution (computed from jobs) =====
  var dirMap = {};
  jobs.forEach(function(j) {
    j.dirList.forEach(function(d) { dirMap[d] = (dirMap[d] || 0) + 1; });
  });
  var dirData = Object.keys(dirMap).map(function(d) {
    return {name: d, value: dirMap[d]};
  }).sort(function(a,b){return b.value - a.value;});

  var chart3El = document.getElementById('chart-direction');
  var existing3 = echarts.getInstanceByDom(chart3El);
  if (existing3) existing3.dispose();
  var chart3 = echarts.init(chart3El,null,{renderer:'svg'});
  chart3.clear();
  chart3.setOption({
    animation:false,
    tooltip:{trigger:'item',appendToBody:true,formatter:'{b}: {c} 个岗位'},
    series:[{
      type:'pie',radius:['45%','72%'],center:['50%','48%'],avoidLabelOverlap:false,
      itemStyle:{borderRadius:6,borderColor:bg2,borderWidth:3},
      label:{show:true,position:'outside',formatter:'{b}\n{c}个',color:ink,fontSize:11},
      emphasis:{label:{fontSize:14,fontWeight:'bold'},scaleSize:10},
      data:dirData,
      color:[accent,accent2,'#7c3aed','#f59e0b','#ef4444','#06b6d4','#84cc16','#ec4899']
    }]
  });
  window.addEventListener('resize',function(){chart3.resize();});
};
#!/usr/bin/env node

var axios = require('axios');
var data = {};
if (process.argv) {
    data.params = {
        city: process.argv[2]
    }
}
axios.get('http://api.jirengu.com/weather.php', data)
    .then(function (response) {
        var currentCity = response.data.results[0].currentCity;
        var today = response.data.results[0].weather_data[0];
        var tomorrow = response.data.results[0].weather_data[1];
        console.log();
        console.log('城市：' + currentCity);
        console.log();
        console.log('---------今日天气---------')
        console.log();
        console.log('1 日期：' + today.date);
        console.log('2 天气：' + today.weather);
        console.log('3 温度：' + today.temperature);
        console.log('4 风力：' + today.wind);
        console.log('5 PM25：' + response.data.results[0].pm25);
        console.log('6 穿衣指数：' + response.data.results[0].index[0].des);
        console.log('7 运动指数：' + response.data.results[0].index[4].des);
        console.log();
        console.log('---------明日天气---------')
        console.log();
        console.log('1 日期：' + tomorrow.date);
        console.log('2 天气：' + tomorrow.weather);
        console.log('3 温度：' + tomorrow.temperature);
        console.log('4 风力：' + tomorrow.wind);
    })
    .catch(function (response) {
        console.log(error);
    })

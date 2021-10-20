import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-barchartexample',
  templateUrl: './barchartexample.component.html',
  styleUrls: ['./barchartexample.component.scss'],
})
export class BarchartexampleComponent implements OnInit {
  tableData: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.buttonCoal();
    this.http
      .get('http://3.16.64.12:8080/api/v1/energyStats')
      .subscribe((res: any) => {
        this.tableData = res.tableStats;
      });
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  ngAfterViewInit() {
    this.http
      .get('http://3.16.64.12:8080/api/v1/energyStats')
      .subscribe((res: any) => {});
  }

  date(event: any) {
    if (event.target.value === 'month') {
      var date = new Date();
      var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

      let month = '' + (firstDay.getMonth() + 1),
        day = '' + firstDay.getDate(),
        year = firstDay.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      let formattedfirstDate = [year, month, day].join('-');

      let lmonth = '' + (lastDay.getMonth() + 1),
        lday = '' + lastDay.getDate(),
        lyear = lastDay.getFullYear();

      if (lmonth.length < 2) lmonth = '0' + lmonth;
      if (lday.length < 2) lday = '0' + lday;

      let formatedLateday = [lyear, lmonth, lday].join('-');

      this.http
        .get(
          `http://3.16.64.12:8080/api/v1/GraphStats_by_date?startDate=${formattedfirstDate}&endDate=${formatedLateday}`
        )
        .subscribe((res: any) => {
          this.canvas = this.mychart.nativeElement;
          this.ctx = this.canvas.getContext('2d');
          const graphCoal = res.map((el: any) => {
            return el.coal;
          });
          const graphElectricity = res.map((el: any) => {
            return el.electricity;
          });

          const graphGas = res.map((el: any) => {
            return el.gas;
          });

          const finalData = [...graphCoal, ...graphElectricity, ...graphGas];

          const labels = res.map((el: any) => {
            return el.created_date;
          });
          new Chart(this.ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'My First Dataset',
                  data: finalData,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                  ],
                  borderWidth: 1,
                  barThickness: 50,
                },
              ],
            },
          });
        });
    } else {
      var currentDate = new Date();
      var firstday = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay())
      );
      var lastday = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)
      );

      let month = '' + (firstday.getMonth() + 1),
        day = '' + firstday.getDate(),
        year = firstday.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      let formattedfirstDate = [year, month, day].join('-');

      let lmonth = '' + (lastday.getMonth() + 1),
        lday = '' + lastday.getDate(),
        lyear = lastday.getFullYear();

      if (lmonth.length < 2) lmonth = '0' + lmonth;
      if (lday.length < 2) lday = '0' + lday;

      let formatedLateday = [lyear, lmonth, lday].join('-');
      this.http
        .get(
          `http://3.16.64.12:8080/api/v1/GraphStats_by_date?startDate=${formattedfirstDate}&endDate=${formatedLateday}`
        )
        .subscribe((res: any) => {
          this.canvas = this.mychart.nativeElement;
          this.ctx = this.canvas.getContext('2d');
          const graphCoal = res.map((el: any) => {
            return el.coal;
          });
          const graphElectricity = res.map((el: any) => {
            return el.electricity;
          });

          const graphGas = res.map((el: any) => {
            return el.gas;
          });

          const finalData = [...graphCoal, ...graphElectricity, ...graphGas];

          const labels = res.map((el: any) => {
            return el.created_date;
          });
          new Chart(this.ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'My First Dataset',
                  data: finalData,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                  ],
                  borderWidth: 1,
                  barThickness: 50,
                },
              ],
            },
          });
        });
    }
  }

  buttonCoal() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // var d = new Date(date),
    let month = '' + (firstDay.getMonth() + 1),
      day = '' + firstDay.getDate(),
      year = firstDay.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let formattedfirstDate = [year, month, day].join('-');

    let lmonth = '' + (lastDay.getMonth() + 1),
      lday = '' + lastDay.getDate(),
      lyear = lastDay.getFullYear();

    if (lmonth.length < 2) lmonth = '0' + lmonth;
    if (lday.length < 2) lday = '0' + lday;

    let formatedLateday = [lyear, lmonth, lday].join('-');

    this.http
      .get(
        `http://3.16.64.12:8080/api/v1/GraphStats_by_date?startDate=${formattedfirstDate}&endDate=${formatedLateday}`
      )
      .subscribe((res: any) => {
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');
        const graphCoal = res.map((el: any) => {
          return el.coal;
        });

        const finalData = [...graphCoal];

        const labels = res.map((el: any) => {
          return el.created_date;
        });
        new Chart(this.ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'My First Dataset',
                data: finalData,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                ],
                borderWidth: 1,
                barThickness: 50,
              },
            ],
          },
        });
      });
  }
  buttonElectricity() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // var d = new Date(date),
    let month = '' + (firstDay.getMonth() + 1),
      day = '' + firstDay.getDate(),
      year = firstDay.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let formattedfirstDate = [year, month, day].join('-');

    let lmonth = '' + (lastDay.getMonth() + 1),
      lday = '' + lastDay.getDate(),
      lyear = lastDay.getFullYear();

    if (lmonth.length < 2) lmonth = '0' + lmonth;
    if (lday.length < 2) lday = '0' + lday;

    let formatedLateday = [lyear, lmonth, lday].join('-');

    this.http
      .get(
        `http://3.16.64.12:8080/api/v1/GraphStats_by_date?startDate=${formattedfirstDate}&endDate=${formatedLateday}`
      )
      .subscribe((res: any) => {
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        const graphElectricity = res.map((el: any) => {
          return el.electricity;
        });

        const finalData = [...graphElectricity];

        const labels = res.map((el: any) => {
          return el.created_date;
        });
        new Chart(this.ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'My First Dataset',
                data: finalData,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                ],
                borderWidth: 1,
                barThickness: 50,
              },
            ],
          },
        });
      });
  }
  buttonGas() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let month = '' + (firstDay.getMonth() + 1),
      day = '' + firstDay.getDate(),
      year = firstDay.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    let formattedfirstDate = [year, month, day].join('-');

    let lmonth = '' + (lastDay.getMonth() + 1),
      lday = '' + lastDay.getDate(),
      lyear = lastDay.getFullYear();

    if (lmonth.length < 2) lmonth = '0' + lmonth;
    if (lday.length < 2) lday = '0' + lday;

    let formatedLateday = [lyear, lmonth, lday].join('-');

    this.http
      .get(
        `http://3.16.64.12:8080/api/v1/GraphStats_by_date?startDate=${formattedfirstDate}&endDate=${formatedLateday}`
      )
      .subscribe((res: any) => {
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        const graphGas = res.map((el: any) => {
          return el.gas;
        });

        const finalData = [...graphGas];

        const labels = res.map((el: any) => {
          return el.created_date;
        });
        new Chart(this.ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'My First Dataset',
                data: finalData,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                ],
                borderColor: [
                  'rgb(255, 99, 132)',
                  'rgb(255, 159, 64)',
                  'rgb(255, 205, 86)',
                ],
                borderWidth: 1,
                barThickness: 50,
              },
            ],
          },
        });
      });
  }

  filter(event: any) {
    const localItem = localStorage.getItem('arr');
    let item: any;
    if (localItem && localItem.length > 0) {
      item = JSON.parse(localItem);
    }

    if (item && item.length > 0) {
      if (item.length > 0 && !item.includes(event.target.value)) {
        item.push(event.target.value);
        localStorage.setItem('arr', JSON.stringify(item));

        this.http
          .get(
            `http://3.16.64.12:8080/api/v1/tableStatsSearch?sourceType=${item.toString()}`
          )
          .subscribe((res) => {
            this.tableData = res;
          });
      } else if (item.includes(event.target.value)) {
        const newitem = item.filter((res: any) => {
          return res != event.target.value;
        });
        localStorage.setItem('arr', JSON.stringify(newitem));

        this.http
          .get(
            `http://3.16.64.12:8080/api/v1/tableStatsSearch?sourceType=${item.toString()}`
          )
          .subscribe((res) => {
            this.tableData = res;
          });
      }
    }
    if (item === undefined) {
      localStorage.setItem('arr', JSON.stringify([event.target.value]));

      this.http
        .get(
          `http://3.16.64.12:8080/api/v1/tableStatsSearch?sourceType=${event.target.value}`
        )
        .subscribe((res) => {
          this.tableData = res;
        });
    }
  }
}

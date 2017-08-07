class Report {
  constructor(formatter, data) {
    this.formatter = formatter;
    this.data = data;
  }

  generateReport() {
    this.retrieveData();
    this.formatter.formatReport(this.data);
    this.sendReport();
    return 'Done';
  }

  retrieveData() {
    console.log('Data retrieved');
  }

  sendReport() {
    console.log('Report sent');
  }
}

class HTMLReport {
  constructor() {

  }

  formatReport(data) {
    console.log('Report formatted by HTMLReport at: ' + data)    
  }
}

class TextReport {
  constructor() {

  }

  formatReport(data) {
    console.log('Report formatted by TextReport at: ' + data)
  }
}

const textReport = new TextReport();
const report = new Report(textReport, new Date().toISOString());
console.log(report.generateReport());


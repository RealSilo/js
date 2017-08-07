class Report {
  constructor() {

  }

  generateReport() {
    this.retrieveData();
    this.formatReport();
    this.sendReport();
  }

  retrieveData() {
    console.log('Data retrieved');
  }

  formatReport() {
    console.log('Report formatted by Report class');
  }

  sendReport() {
    console.log('Report sent');
  }
}

class HTMLReport extends Report {
  constructor() {
    super()
  }

  formatReport() {
    console.log('Report formatted by HTMLReport class');
  }
}

class TextReport extends Report {
  constructor() {
    super()
  }

  formatReport() {
    console.log('Report formatted by TextReport class');
  }
}

const report = new TextReport();
report.generateReport();

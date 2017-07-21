export class RequirementPrint {
  app: string;
  formats: string;
  imagePath: string;

  constructor(app, formats, imagePath) {
    this.app = app;
    this.formats = formats;
    this.imagePath = imagePath;
  }
}

export class Format {
  public static dateTime(timeStamp: string) {
    const [date, timeString] = timeStamp.split("T");
    const time = timeString.split(".")[0];
    return { date, time };
  }
}

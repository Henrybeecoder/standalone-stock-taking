export class Format {
  public static dateTime(timeStamp: string) {
    const [date, time] = timeStamp.split("T");
    return { date, time };
  }
}

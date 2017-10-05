/**
 * Created by ramzan on 10/5/17.
 */
export class Product {
  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    public department: string[],
    public price: number
  ){

}
}

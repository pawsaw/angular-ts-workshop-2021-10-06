export interface CarParams {
  brand: string;
  model: string;
}

export function Car({ brand, model }: CarParams) {
  return function (target: any): void {
    target.brand = brand;
    target.model = model;
  };
}

@Car({
  brand: 'Tesla',
  model: 'Model S',
})
export class Tesla {}

export default interface IUpdateOrderPadDTO {
  id: number,
  table_id?: number;
  in_use: boolean;
  hash_code?: string;
}

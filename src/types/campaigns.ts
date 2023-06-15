declare interface Campaign {
  id: string;
  name: string;
  tickets_issued: number;
  max_tickets: number;
  categories?: string;
  date_created: string;
  max_draw_date: string;
  linked_product: string;
}

export { Campaign };
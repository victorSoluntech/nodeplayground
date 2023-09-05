import * as fs from 'fs';

/*class TAndELineItem {
    id!: string;
    time_and_expense_cards_id!: string;
    contract_id?: string;
    date_worked?: Date;
    hours_worked?: number;
    time_bill_type?: string;
    costCenterId?: string;
    workShiftId?: string;
    expense_amount?: number;
    expense_tax_amount?: number;
    expense_type?: string;
    file?: string;
    file_original_name?: string;
    comments?: string;
    buyer_id?: string;
    day_of_the_week?: string;
    status?: string;
    total_expense?: number;
    created_by_account_id?: string;
    created_at?: Date;
    last_updated_at?: Date;
    last_updated_by_account_id?: string;
    t_and_e_line_item_id_number?: number;
    t_and_e_line_item_id?: number;
    tenant_id?: number;
    bill_rate_to_client?: number;
    labour_fees_to_client?: number;
  
    static fromJSON(json: any): TAndELineItem {
        const lineItem = new TAndELineItem();
        lineItem.id = json.id;
        lineItem.time_and_expense_cards_id = json.field_483;
        lineItem.contract_id = json.field_484;
        lineItem.date_worked = json.field_484 ? new Date(json.field_484) : undefined;
        lineItem.hours_worked = json.field_486_raw;
        lineItem.time_bill_type = json.field_487;
        lineItem.expense_amount = json.field_518;
        lineItem.expense_tax_amount = json.field_519;
        lineItem.expense_type = json.field_1218;
        lineItem.file = json.field_2089;
        lineItem.file_original_name = json.field_2089;
        lineItem.comments = json.field_1742;
        lineItem.buyer_id = json.field_485;
        lineItem.day_of_the_week = json.field_485;
        lineItem.status = json.field_485;
        lineItem.total_expense = json.field_520_raw;
        lineItem.created_by_account_id = json.field_483;
        lineItem.created_at = json.field_483 ? new Date(json.field_483) : undefined;
        lineItem.last_updated_at = json.field_2273 ? new Date(json.field_2273) : undefined;
        lineItem.last_updated_by_account_id = json.field_2273;
        lineItem.t_and_e_line_item_id_number = json.field_512;
        lineItem.t_and_e_line_item_id = json.field_512;
        lineItem.tenant_id = json.field_512;
        lineItem.bill_rate_to_client = json.field_942_raw;
        lineItem.labour_fees_to_client = json.field_527_raw;

        return lineItem;
    }

    toSQLInsert(): string {
        // Generate an SQL insert script for the record
        const columns = Object.keys(this).filter((key) => this[key] !== null).join(', ');
        const values = Object.keys(this).filter((key) => this[key] !== null).map((key) => {
          const value = this[key];
          if (value instanceof Date) {
            return `'${value.toISOString()}'`;
          } else if (typeof value === 'string') {
            return `'${value}'`;
          } else {
            return value.toString();
          }
        }).join(', ');
    
        return `INSERT INTO public.t_and_e_line_items (${columns}) VALUES (${values});`;
      }
  }*/

 /* class TAndELineItem {
    id: string;
    timeAndExpenseCardsId: string;
    contractId: string;
    dateWorked: Date | null;
    hoursWorked: number | null;
    timeBillType: string | null;
    costCenterId: string | null;
    workShiftId: string | null;
    expenseAmount: number | null;
    expenseTaxAmount: number | null;
    expenseType: string | null;
    file: string | null;
    fileOriginalName: string | null;
    comments: string | null;
    buyerId: string | null;
    dayOfTheWeek: string | null;
    status: string | null;
    totalExpense: number | null;
    createdByAccountId: string | null;
    createdAt: Date | null;
    lastUpdatedAt: Date | null;
    lastUpdatedByAccountId: string | null;
    tAndELineItemIdNumber: bigint;
    tAndELineItemId: bigint;
    tenantId: bigint | null;
    billRateToClient: number | null;
    labourFeesToClient: number | null;
  
    constructor(data: Partial<TAndELineItem>) {
      Object.assign(this, data);
    }
  
    static fromJSON(jsonData: any): TAndELineItem {
      // Map JSON properties to class properties based on the provided equivalence
      return new TAndELineItem({
        dateWorked: jsonData.field_484 || null,
        hoursWorked: jsonData.field_486_raw || null,
        timeBillType: jsonData.field_487 || null,
        expenseAmount: jsonData.field_518 || null,
        expenseTaxAmount: jsonData.field_519 || null,
        expenseType: jsonData.field_1218 || null,
        fileOriginalName: jsonData.field_2089 || null,
        comments: jsonData.field_1742 || null,
        dayOfTheWeek: jsonData.field_485 || null,
        totalExpense: jsonData.field_520_raw || null,
        createdAt: jsonData.field_483 || null,
        lastUpdatedAt: jsonData.field_2273 || null,
        tAndELineItemIdNumber: BigInt(jsonData.field_512),
        billRateToClient: jsonData.field_942_raw || null,
        labourFeesToClient: jsonData.field_527_raw || null,
      });
    }
  
    toSQLInsert(): string {
      // Generate an SQL insert script for the record
      const columns = Object.keys(this).filter((key) => this[key] !== null).join(', ');
      const values = Object.keys(this).filter((key) => this[key] !== null).map((key) => {
        const value = this[key];
        if (value instanceof Date) {
          return `'${value.toISOString()}'`;
        } else if (typeof value === 'string') {
          return `'${value}'`;
        } else {
          return value.toString();
        }
      }).join(', ');
  
      return `INSERT INTO public.t_and_e_line_items (${columns}) VALUES (${values});`;
    }
  }
  
  // Example usage:
  const jsonData = {
    field_484: '2023-09-04',
    field_486_raw: 8.5,
    field_487: 'Billable',
    // ... (other JSON properties)
  };
  
  const tAndELineItem = TAndELineItem.fromJSON(jsonData);
  const sqlInsertScript = tAndELineItem.toSQLInsert();
  console.log(sqlInsertScript);
  
  

try {
  const jsonString = fs.readFileSync('./files/telineitems.json', 'utf-8');
  const jsonData = JSON.parse(jsonString);
  console.log(jsonData);
} catch (err) {
  console.error(err);
}*/
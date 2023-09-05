'use strict';

const fs = require("fs");
const { uuid } = require('uuidv4');

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

function toJSON() {
    return JSON.stringify(this);
}

function fromJSON(json) {
    const data = JSON.parse(json);
    return new TAndELineItem(data);
}

function toSQLInsert(object, table) {
    const columns = Object.keys(object);
    const values = columns.map((column) => {
        if (object[column] === null || object[column] === undefined) {
            return "NULL";
        } else if (typeof object[column] === "string") {
            return `'${object[column]}'`;
        } else if (object[column] instanceof Date) {
            return isValidDate(object[column])? `'${object[column].toISOString()}'`: "NULL";
        } else {
            return object[column];
        }
    });

    const sql = `INSERT INTO public.${table} (${columns.join(', ')}) \n VALUES (${values.join(', ')})`;
    return sql;
}


try {
    
    // Set desired values
    const contractId = '3c87ec2e-50e7-4952-bc53-639df4599418'; // Required
    const buyerId = 'b85cc784-dd80-4ce6-b49b-7cae33a37125'; // Required

    const timeAndExpenseCardsId = '2e3884fe-17ae-4bab-a66e-00adf0c0926f'; // Required-ish

    const status = ''; // Optional (Accepted By Default)
    const loggedInUserId = ''; // Optional
    const costCenterId = null; // Optional
    const workShiftId = null; // Optional

    const jsonStringte = fs.readFileSync(`./files/timeexpensecards.json`, 'utf-8');
    let jsonDatate = JSON.parse(jsonStringte);
    jsonDatate = jsonDatate.records;

    const jsonStringli = fs.readFileSync(`./files/telineitems.json`, 'utf-8');
    let jsonDatali = JSON.parse(jsonStringli);
    jsonDatali = jsonDatali.records;
    
    const mapTe = new Map();
    let script = '';

    for (const data of jsonDatate) {
        const tE = {
            id: uuid(),
            status: data.field_386 || '',
            created_at: new Date(data.field_852_raw?.iso_timestamp) || null,
            last_updated_at: new Date(data.field_2272_raw?.iso_timestamp) || null,
            t_and_e_id_number: data.field_418 || 0,
            t_and_e_id: 700000 + data.field_418 || 0,
            tenant_id: 9,
            period_start_date: new Date(data.field_387_raw?.iso_timestamp) || new Date(),
            period_end_date: new Date(data.field_423_raw?.iso_timestamp) || new Date(),
            hours_worked: parseFloat(data.field_489_raw) || 0,
            total_expenses: parseFloat(data.field_522_raw) || 0,
            total_labour_fees_to_client: parseFloat(data.field_399_raw) || 0,
            contract_id: contractId,
            reason_for_rejection: data.field_605 || '',
            attachment_name: data.field_1602 || '',
            total_hours: parseFloat(data.field_489_raw) || 0,
            approved_at: new Date(data.field_846_raw?.iso_timestamp) || null,
            buyer_id: buyerId,
            is_being_processed: false,
            total_regular_hours: parseFloat(data.field_1430_raw) || 0,
            total_double_time_hours: parseFloat(data.field_673_raw) || 0,
            supplier_tax_total: parseFloat(data.field_1053_raw) || 0,
            msp_tax_total: parseFloat(data.field_1054_raw) || 0,
            grand_total:  parseFloat(data.field_399_raw) || 0,
        }
        mapTe.set(data.id, tE.id);
        const sql = toSQLInsert(tE,'time_and_expense_cards'); // '';
        script += sql + ';\n';
    }
    
    for (const data of jsonDatali) {
        const lineItem = {
            id: uuid(),
            time_and_expense_cards_id: mapTe.get(data.field_481_raw[0].id) || timeAndExpenseCardsId,
            contract_id: contractId,
            date_worked: new Date(data.field_484_raw?.iso_timestamp) || new Date(),
            hours_worked: parseFloat(data.field_486_raw) || 0,
            time_bill_type: data.field_487 || null,
            cost_center_id: costCenterId || null,
            work_shift_id: workShiftId || null,
            expense_amount: parseFloat(data.field_518_raw) || null,
            expense_tax_amount: parseFloat(data.field_519_raw) || null,
            expense_type: data.field_1218 || null,
            file: null,
            file_original_name: data.field_2089_raw?.filename || null,
            comments: data.field_1742 || null,
            buyer_id: buyerId,
            day_of_the_week: data.field_485 || null,
            status: status || 'Accepted',
            total_expense: parseFloat(data.field_520_raw) || null,
            created_by_account_id: loggedInUserId || null,
            created_at: new Date(data.field_483_raw?.iso_timestamp) || new Date(),
            last_updated_at: new Date(data.field_2273_raw?.iso_timestamp) || new Date(),
            last_updated_by_account_id: loggedInUserId || null,
            t_and_e_line_item_id_number: parseInt(data.field_512),
            t_and_e_line_item_id: 5000 + parseInt(data.field_512),
            tenant_id: 9,
            bill_rate_to_client: parseFloat(data.field_942_raw) || 0,
            labour_fees_to_client: parseFloat(data.field_527_raw) || 0,
        };
        const sql = toSQLInsert(lineItem,'t_and_e_line_items'); // '';
        script += sql + ';\n'; 
    }
    fs.writeFile(`./output/${/*(new Date()).toISOString()*/''}LI.txt`, script, err => {
        if (err) {
          console.error(err);
        }
      });
}
catch (err) {
    console.error(err);
}

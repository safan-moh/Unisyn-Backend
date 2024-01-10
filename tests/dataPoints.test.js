const request = require("supertest");
const app = require("../server");
describe("GET /api/cashflowBusiness", () => {
    it("should return all Cashflow", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessDebt/2cad7c32-9d76-11ee-8c90-0242ac120003");
        expect(res.statusCode).toBe(200);
        expect(res.body.data[0]. debt_service_coverage_ratio.ytd).toBe("1.56:1");
    });
});
describe("GET capacity personal debt", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityPersonalDebt/2cad7c32-9d76-11ee-8c90-0242ac120003");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET Capacity Business Cashflow", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessCashflow/2cad7c32-9d76-11ee-8c90-0242ac120003");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET Capacity Personal Cashflow", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityPersonalCashflow/2cad7c32-9d76-11ee-8c90-0242ac120003");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET DSCR Formula", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessDebt/DSCR-formula/2cad7c32-9d76-11ee-8c90-0242ac120002");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET Debt to income ratio Formula", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessDebt/debt-to-income-formula/2cad7c32-9d76-11ee-8c90-0242ac120002");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET Full Debt Schedule", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessDebt/fullDebtSchedule/2cad7c32-9d76-11ee-8c90-0242ac120002");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET Capacity Business Cashflow profit loss statement", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessCashflow/profit-loss-statement/2cad7c32-9d76-11ee-8c90-0242ac120002");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET Capacity Business Cashflow Top Customers", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessCashflow/top-customers/2cad7c32-9d76-11ee-8c90-0242ac120002");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

describe("GET Capacity Business Cashflow Formula", () => {
    it("should return data according to profile Id", async () => {
        const res = await request(app).get("/api/v1/capacityBusinessCashflow/formula/2cad7c32-9d76-11ee-8c90-0242ac120002");
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
    });
});

// Capital Business test cases
describe('API Tests', () => {
    describe('GET /api/v1/capitalPersonal/:id', () => {
      it('should return capital personal information for the given ID', async () => {
        const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
        const res = await request(app).get(`/api/v1/capitalPersonal/${id}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
      });
    });
  
    describe('GET /api/v1/capitalPersonal/getFinancialSummary/:id', () => {
      it('should return financial summary information for the given ID', async () => {
        const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
        const res = await request(app).get(`/api/v1/capitalPersonal/getFinancialSummary/${id}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
      });
    });
  
    describe('GET /api/v1/capitalPersonal/getBalanceSheet/:id', () => {
      it('should return balance sheet information for the given ID', async () => {
        const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
        const res = await request(app).get(`/api/v1/capitalPersonal/getBalanceSheet/${id}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
      });
    });
  
    describe('GET /api/v1/capitalPersonal/getFinancialStatement/:id', () => {
      it('should return financial statement information for the given ID', async () => {
        const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
        const res = await request(app).get(`/api/v1/capitalPersonal/getFinancialStatement/${id}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
      });
    });
  
    describe('GET /api/v1/capitalBusiness/:id', () => {
      it('should return capital business information for the given ID', async () => {
        const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
        const res = await request(app).get(`/api/v1/capitalBusiness/${id}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
      });
    });
  
    describe('GET /api/v1/capitalBusiness/getBalanceSheetSummary/:id', () => {
      it('should return balance sheet summary information for the given ID', async () => {
        const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
        const res = await request(app).get(`/api/v1/capitalBusiness/getBalanceSheetSummary/${id}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
      });
    });
  describe('GET /api/v1/capitalBusiness/viewBalanceSheetSummary/:id', () => {
    it('should return the view of balance sheet summary for the given ID', async () => {
      const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
      const res = await request(app).get(`/api/v1/capitalBusiness/viewBalanceSheetSummary/${id}`);
      
      expect(res.statusCode).toBe(200);
      expect(res.body.data[0]).toHaveProperty('balanceSheets');
    });
  });
});

// Evaluator test cases
describe('GET /api/v1/capitalPersonal/:id', () => {
  it('should return the value with the highest trust score', async () => {
    const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
    const res = await request(app).get(`/api/v1/capitalPersonal/${id}`);
    
    expect(res.statusCode).toBe(200);
    expect(res.body.asset_current_total).toBe(2000);
  });
});
describe('GET /api/v1/capitalPersonal/:id', () => {
  it('validate the data source', async () => {
    const id = '2cad7c32-9d76-11ee-8c90-0242ac120002';
    const res = await request(app).get(`/api/v1/capitalPersonal/${id}`);
    
    expect(res.statusCode).toBe(200);
    expect(res.body.data_source).toBe("unisyn");
  });
});



  
'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);

describe('API SERVER', () => {
  it('can create a new food', async () => {
    let foodObj = { name: 'test', type: 'test' };
    const res = await mockRequest.post('/api/v1/food').send(foodObj);
    expect(res.body.name).toBe(foodObj.name);
    expect(res.body.type).toBe(foodObj.type);
  });

  it('can get a food after creation', async () => {
    let foodObj = { name: 'test', type: 'test' };
    const res = await mockRequest.get('/api/v1/food');
    expect(res.body.foods[0].name).toBe(foodObj.name);
    expect(res.body.foods[0].type).toBe(foodObj.type);
    expect(res.body.foods.length).toBe(1);
  });


  it('can delete a food ', async () => {
    let foodObj = {
        id: "60dc6bee6af13f0e00907092",
        name: "test",
        type: "test",
        
    };
    const res = await mockRequest.delete('/api/v1/food/60dc6bee6af13f0e00907092').send(foodObj);
    console.log(res.body);
    expect(res.body).toBe('deletedfood');
    // expect(res.body.foods[0].type).toBe(foodObj.type);
    // expect(res.body.foods[0].length).toBe(1);
  });

  it('can update a food ', async () => {
    let foodObj = {
        name: "testupdate",
        type: "testupdate",
       
    };
    const res = await mockRequest.put('/api/v1/food/60dc6bee6af13f0e00907092',{foodObj:foodObj});
    console.log(res.body);
    expect(res.status).toBe(200);
      });
////////////////////////////////////////////////////////////////////////////////
it('can create a new clothes', async () => {
    let clothesObj = { name: 'test', type: 'test' };
    const res = await mockRequest.post('/api/v1/clothes').send(clothesObj);
    expect(res.body.name).toBe(clothesObj.name);
    expect(res.body.type).toBe(clothesObj.type);
  });

  it('can get a clothes after creation', async () => {
    let clothesObj = { name: 'test', type: 'test' };
    const res = await mockRequest.get('/api/v1/clothes');
    expect(res.body.clothe[0].name).toBe(clothesObj.name);
    expect(res.body.clothe[0].type).toBe(clothesObj.type);
    expect(res.body.clothe.length).toBe(1);
  });


  it('can delete a clothes ', async () => {
    let clothesObj = {
        id: "60dc6bee6af13f0e00907092",
        name: "test",
        type: "test",
        
    };
    const res = await mockRequest.delete('/api/v1/clothes/60dc6bee6af13f0e00907092').send(clothesObj);
    console.log(res.body);
    expect(res.body).toBe('deleted clothes');
   
  });

  it('can update a clothes ', async () => {
    let clothesObj = {
        name: "testupdate",
        type: "testupdate",
       
    };
    const res = await mockRequest.put('/api/v1/clothes/60dc6bee6af13f0e00907092',{clothesObj:clothesObj});
    console.log(res.body);
    expect(res.status).toBe(200);
      });
});
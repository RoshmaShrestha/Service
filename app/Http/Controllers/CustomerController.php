<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    //Get All Customers
    public function index()
    {
        $customers = Customer::all();
        return response()->json($customers);
    }

    // Create a new Customer 
    public function store(Request $request)
    {
        $customer = Customer::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'city' => $request->city,
            'country' => $request->country,
            'status' => $request->status,
        ]);

        return response() ->json($customer);    
    }
    // Get a customer by ID> 
    public function show($id)
    {
        $customer = Customer::find($id);
        return response () -> json($customer);
    }
    // Update a customer by ID
    public function update(Request $request, $id){
        $customer = Customer::find($id);
        $customer->update ([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'city' => $request->city,
            'country' => $request->country,
            'status' => $request->status,
        ]);
        return response() ->json($customer);
    }
    // ❌ DELETE a customer
    public function destroy($id)
    {
        $customer = Customer::find($id);
        $customer->delete();

        return response()->json(['message' => 'Customer deleted!']);
    }
}
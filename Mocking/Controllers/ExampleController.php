<?php

namespace Mocking\Controllers;

use Exception;
use Illuminate\Http\Request;

class ExampleController extends Controller{
	public function getData(){
		$path = base_path()."/Mocking/Json/get_all_data.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}

	public function getCart(){
		$path = base_path()."/Mocking/Json/cart.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}

	public function increaseQuantity($id){
		$path = base_path()."/Mocking/Json/success_patch.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}

	public function decreaseQuantity($id){
		$path = base_path()."/Mocking/Json/success_patch.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}

	public function addToCartACtion($id){
		$path = base_path()."/Mocking/Json/success_post.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}

	public function deleteCart(){
		$path = base_path()."/Mocking/Json/success_delete.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}


	public function postData(){
		$path = base_path()."/Mocking/Json/success_post.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}
	public function putData(){
		$path = base_path()."/Mocking/Json/success_put.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}
	public function patchData(){
		$path = base_path()."/Mocking/Json/success_patch.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}
	public function deleteData(){
		$path = base_path()."/Mocking/Json/success_delete.json";
		$json = json_decode(file_get_contents($path), true);
		return response()->json($json);
	}
}
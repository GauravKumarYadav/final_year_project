import 'package:final_year_project/converterScreen.dart';
import 'package:flutter/material.dart';
import 'converterScreen.dart';

class MainScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(icon: Icon(Icons.menu),onPressed: (){
          //
        }),
        title: Text('MAIN SCREEN'),
        actions: <Widget>[
          IconButton(icon: Icon(Icons.search),onPressed: (){

          })
        ],
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Converter Screen',style: TextStyle(color: Colors.white, ),),
          color: new Color(0xff622F74),
          onPressed: () {
            Navigator.push(context, MaterialPageRoute( builder: (context) => converterScreen() ), ) ;
          }
        ),
      ),
    );
  }
}


//
//  SC_wrapper.swift
//  MASAS
//
//  Created by Thomas Binetruy on 29/08/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Foundation
import Soundcloud


@objc(SC_sdk)
class SC_sdk: NSObject {
  
  @objc func addEvent(name: String, location: String, date: NSDate) -> Void {
    // Date is ready to use!
    NSLog("Pretending to create an event")
    
    Soundcloud.clientIdentifier = "ebc8467d2ae245181b131d34b7273c20"
    Soundcloud.clientSecret  = "43f22ebcd1cadc4274e54ee779f49f9b"
    Soundcloud.redirectURI = "fb433759926818956://connect"
    
    let appDelegate: AppDelegate = (UIApplication.sharedApplication().delegate as! AppDelegate)
    let foo =  ViewController()
    
    appDelegate.rootViewController.presentViewController(foo, animated: true, completion: { _ in
      Session.login(foo, completion: { _ in
        print(appDelegate.rootViewController)
        print(appDelegate.ReactNativeRootViewController)
        appDelegate.rootViewController.dismissViewControllerAnimated(true, completion: { _ in })
        print("conntect")
      })
    })
  }
}
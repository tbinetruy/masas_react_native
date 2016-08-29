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
  
  @objc func SC_login(callback: RCTResponseSenderBlock) -> Void {
    Soundcloud.clientIdentifier = "ebc8467d2ae245181b131d34b7273c20"
    Soundcloud.clientSecret  = "43f22ebcd1cadc4274e54ee779f49f9b"
    Soundcloud.redirectURI = "fb433759926818956://connect"
    
    let appDelegate: AppDelegate = (UIApplication.sharedApplication().delegate as! AppDelegate)
    let SC_loginViewController =  ViewController()
    
    appDelegate.rootViewController.presentViewController(SC_loginViewController, animated: true, completion: { _ in
      Session.login(SC_loginViewController, completion: { _ in
        appDelegate.rootViewController.dismissViewControllerAnimated(true, completion: { _ in })
        
        let session = Soundcloud.session
        session?.me({ user in
          let userId = user.response.result?.identifier
          callback([NSNull(), userId!])
        })
      })
    })
  }
}
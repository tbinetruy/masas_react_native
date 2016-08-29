#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(SC_sdk, NSObject)

//RCT_EXTERN_METHOD(addEvent:(RCTResponseSenderBlock)callback name:(NSString *)name location:(NSString *)location date:(nonnull NSDate *)date)

RCT_EXTERN_METHOD(SC_login:(RCTResponseSenderBlock)callback)

@end
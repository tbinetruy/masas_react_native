#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(SC_sdk, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSDate *)date)

@end
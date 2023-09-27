package com.example.app;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
  
      // --- Remove bridge init as it's deprecated and add these lines
      registerPlugin(com.capacitorjs.plugins.app.AppPlugin.class);
      registerPlugin(com.capacitorjs.plugins.share.SharePlugin.class);
      // ---
    }
}

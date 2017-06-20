package com.zobro2;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.IntentFilter;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "zobro2";
    }

    /**
     * Provides the ability to receive application events.
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }

    private MediaPlayer mMediaPlayer;
    private AudioManager mAudioManager;


    /**
     * Called when the activity is first created.
     *
     * @param savedInstanceState  contains the activity's previously frozen state, if there was one.
     *
     */
    @Override protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        mAudioManager = (AudioManager) this.getSystemService(Context.AUDIO_SERVICE);
        mAudioManager.setSpeakerphoneOn(false);

        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.intent.action.HEADSET_PLUG");
        registerReceiver(mBroadcastReceiver, intentFilter);
    }

    /**
     * Stops the mMediaPlayer if headset have been unplugged
     *
     * @param context the context in which the receiver is running.
     * @param intent the intent broadcast being received.     *
     *
     */
    private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver() {
        @Override public void onReceive(Context context, Intent intent) {
            if (intent.getAction().equals(Intent.ACTION_HEADSET_PLUG)) {
                int state = intent.getIntExtra("state", -1);
                switch (state) {
                    case 0:
                        //Headset is unplugged
                        if (mMediaPlayer != null && mMediaPlayer.isPlaying()) {
                            mMediaPlayer.stop();
                        }
                        break;
                    case 1:
                        //Headset is plugged
                        break;
                }
            }
        }
    };

    /**
     * Starts the mMediaPlayer with required mp3
     *
     * @param view View from which the sound is extracted
     *
     */
    public void playSound(View view) {
        if (mAudioManager.isWiredHeadsetOn()) {
            mMediaPlayer = MediaPlayer.create(this, R.raw.sound1);
            mMediaPlayer.start();
        }
    }
}

# Golden Solution - G179

## Reference answer

$-0.5\ \mathrm{V} \le V_{IC} \le V_{CC} - 1.3\ \mathrm{V}$. The range includes the negative supply with 0.5 V to spare.

- Each p-channel $|V_{GS}| = 0.6$ V. The sources of the followers $M_6$/$M_7$ (gates of $M_1$/$M_2$) are at $V_{IC} + 0.6$ V, and the common source of the pair is at $V_{IC} + 1.2$ V.
- The diode-connected $M_3$ puts the drains of $M_1$/$M_2$ at $V_{GS3} = 0.6$ V.
- Lower limit:
  - $M_1$/$M_2$ need $V_{SD} \ge 0.1$ V: $V_{IC} + 1.2 - 0.6 \ge 0.1$, so $V_{IC} \ge -0.5$ V.
  - $M_6$/$M_7$ (drains at 0 V) need $V_{IC} + 0.6 \ge 0.1$: also $V_{IC} \ge -0.5$ V.
- Upper limit:
  - $M_5$: $V_{CC} - (V_{IC} + 1.2) \ge 0.1$, so $V_{IC} \le V_{CC} - 1.3$ V.
  - $M_8$/$M_9$ need $V_{IC} \le V_{CC} - 0.7$ V, which is less restrictive.

## Grading notes

+2: both limits ($-0.5$ V and $V_{CC} - 1.3$ V, ±0.05 V) with the right limiting devices and the active-region conditions $|V_{DS}| \ge |V_{ov}|$. +1: limits right but one derived with a $|V_t|$/$|V_{ov}|$ slip that cancels, or the upper limit taken from $M_8$/$M_9$ ($V_{CC} - 0.7$ V) while the lower limit is right. 0: only one limit right. -2 (asserted as fact): bipolar numbers (−0.6 V, $V_{CC} - 1.5$ V) reused, saturation condition written as $|V_{DS}| \ge |V_t|$, or the claim that MOS followers do not level-shift.

# Golden Solution - G178

## Reference answer

$-0.6\ \mathrm{V} \le V_{IC} \le V_{CC} - 1.5\ \mathrm{V}$. The range extends 0.6 V below the negative rail ($-V_{EE} = 0$).

- The emitter followers shift the input up by one $V_{EB}$: the bases of $Q_1$/$Q_2$ are at $V_{IC} + 0.7$ V, and their common emitter is at $V_{IC} + 1.4$ V.
- With a pure common-mode input, the collectors of $Q_1$ and $Q_2$ sit at $V_{BE3} = 0.7$ V (the diode-connected mirror).
- Lower limit:
  - $Q_1$/$Q_2$ active needs $V_{EC} \ge 0.1$ V: $V_{IC} + 1.4 - 0.7 \ge 0.1$, so $V_{IC} \ge -0.6$ V.
  - $Q_6$/$Q_7$ (collectors at 0 V) need $V_{IC} + 0.7 - 0 \ge 0.1$, which gives the same $V_{IC} \ge -0.6$ V.
- Upper limit:
  - Tail source $Q_5$: $V_{CC} - (V_{IC} + 1.4) \ge 0.1$, so $V_{IC} \le V_{CC} - 1.5$ V.
  - The follower sources $Q_8$/$Q_9$ need $V_{CC} - (V_{IC}+0.7) \ge 0.1$, i.e. $V_{IC} \le V_{CC} - 0.8$ V, which is less restrictive.
- Without the followers the pair's collectors (0.7 V) would be only 0.7 V below its emitters at $V_{IC} = 0$, and the range would stop at about $+0.1$ V. The level shift by $V_{EB}$ adds the missing headroom while keeping the active (high-gain) mirror load.

## Grading notes

+2: both limits ($-0.6$ V and $V_{CC} - 1.5$ V, ±0.05 V), each traced to the right devices ($Q_1$/$Q_2$ or $Q_6$/$Q_7$ at the bottom, $Q_5$ at the top). +1: both limits right with one device misattributed, or the upper limit given as $V_{CC} - 0.8$ V from $Q_8$/$Q_9$ while $Q_5$ is overlooked but the lower limit is right. 0: only the lower limit right. -2 (asserted as fact): range claimed to stop above 0 V (e.g. $V_{IC} \ge 0.1$ V as for a stage without followers), the followers' level shift taken in the wrong direction, or $Q_3$'s base-emitter drop ignored so that the pair's collectors are taken at 0 V.

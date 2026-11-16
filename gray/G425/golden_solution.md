# Golden Solution - G425

## Reference answer

Each output can swing from about 0.66 V to 1.30 V (0.64 V peak-to-peak per output, 1.28 V differential peak-to-peak), compared with 0.46 V to 1.50 V originally.

- Upper limit: $M_{1A}$ enters triode when its gate is $|V_{t1A}|$ below its drain: $V_{o(\max)} = V_{BiasC} + |V_{t1A}| = 1.0 + 0.3 = 1.30$ V.
- Lower limit: $M_{3A}$ enters triode when its drain is $V_{t3A}$ below its gate: $V_{o(\min)} = V_{BiasD} - V_{t3A} = 0.96 - 0.3 = 0.66$ V.
- Check that the devices below the cascodes stay active: source of $M_{1A}$ at $1.0 + 0.3 + 0.183 = 1.48$ V, so $V_{SD11} = 0.52$ V > $|V_{ov11}| = 0.18$ V; source of $M_{3A}$ at $0.96 - 0.3 - 0.133 = 0.53$ V, so $V_{DS3} = 0.53$ V > $V_{ov3} = 0.13$ V.
- The swing shrinks because the bias voltages were designed for 0.5-V cascode thresholds; lower thresholds raise the minimum and lower the maximum output.

## Grading notes

+2: 0.66 V and 1.30 V (±0.02 V). +1: correct limits with a missing check or a slip in one value. 0: one limit right and the other wrong. −2 (asserted as fact): swing claimed to increase (e.g. 0.26 V to 1.7 V using thresholds in the wrong direction), or limits computed from the current-source devices only ignoring the cascodes.

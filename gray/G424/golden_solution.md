# Golden Solution - G424

## Reference answer

CMIR ≈ 0.57 V to 1.98 V (originally 0.77 V to 2.18 V with 0.5-V input thresholds).

- Overdrives: $V_{ov1} = \sqrt{2(2.0\ \text{mA})/[170\ \mu(10)(133.3)]} = 0.133$ V; $V_{ov5} = V_{ov6} = 0.133$ V (same $m$ and current); $|V_{ov1A}| = \sqrt{2(2.4\ \text{mA})/[45\ \mu(24)(133.3)]} = 0.183$ V.
- Lower limit: $M_5$, $M_6$ reach the triode edge when $V_{DS5} = V_{ov5}$: $V_{IC(\min)} = V_{t1} + V_{ov1} + V_{ov5} = 0.3 + 0.133 + 0.133 \approx 0.57$ V.
- Upper limit: $M_1$ enters triode when its gate is $V_{t1}$ above its drain, which sits at the source of $M_{1A}$: $V_{S1A} = V_{BiasC} + |V_{t1A}| + |V_{ov1A}| = 1.0 + 0.5 + 0.183 = 1.683$ V. $V_{IC(\max)} = V_{S1A} + V_{t1} = 1.98$ V.
- Lowering $V_{t1}$ shifts the whole range down by 0.2 V (the range width is unchanged); the upper end stays just below $V_{DD}$ = 2 V.

## Grading notes

+2: ≈ 0.56–0.58 V to 1.97–2.0 V. +1: one limit right and the other off by a slip (e.g. overdrive 0.18 instead of 0.133 V). 0: correct method, both limits shifted by a consistent error, or only one limit given. −2 (asserted as fact): unchanged CMIR claimed, the upper limit set by $V_{DD} - $ something unrelated to $M_1$ triode, or the threshold change applied in the wrong direction (range shifted up).

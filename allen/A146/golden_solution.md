# Golden Solution - A146

## Reference answer

$v_{G1}(\max) = V_{DD} - V_{SG3} + V_{T1} = V_{DD} - |V_{T3}| - \sqrt{\dfrac{I_{SS}}{K'_P(W/L)_3}} + V_{T1}$

$v_{G1}(\min) = V_{DS5}(\mathrm{sat}) + V_{GS1} = \sqrt{\dfrac{2I_{SS}}{K'_N(W/L)_5}} + V_{T1} + \sqrt{\dfrac{I_{SS}}{K'_N(W/L)_1}}$

- Upper limit: M1's drain is held one diode drop below $V_{DD}$ by M3, which carries $I_{SS}/2$: $V_{SG3} = |V_{T3}| + \sqrt{I_{SS}/\beta_3}$. M1 leaves saturation when $V_{G1} > V_{D1} + V_{T1}$. Both halves have identical diode loads, so the M2 path gives the same limit.
- Lower limit: the common source node $V_{G1} - V_{GS1}$ must stay above $V_{DS5}(\mathrm{sat}) = \sqrt{2I_{SS}/\beta_5}$ (M5 carries $I_{SS}$). M1 carries $I_{SS}/2$, so $V_{GS1} = V_{T1} + \sqrt{I_{SS}/\beta_1}$.

## Grading notes

Credit is split equally between the two limits. +2: both expressions equivalent to the reference, with the minus sign on the M3 overdrive term and the correct factors of 2. +1: one factor-of-2 slip. 0: one limit right and the other wrong. −2 (asserted as fact): the M3 overdrive added instead of subtracted in $v_{G1}(\max)$, $V_{T1}$ omitted from $v_{G1}(\max)$, $V_{DS5}(\mathrm{sat})$ omitted from $v_{G1}(\min)$, or $K'_P$ used for M1/M5.

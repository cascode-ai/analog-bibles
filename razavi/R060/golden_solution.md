# Golden Solution - R060

## Reference answer

### Negative $V_D$

The labeled drain becomes the effective source. Current through the channel reverses and grows in magnitude in triode. The effective gate drive is $1.5\ \mathrm{V}-V_D$, and the negative $V_{SB}$ reduces $V_{TH}$ while the weak-forward-bias body-effect approximation applies.

The drain–bulk junction is forward biased as soon as $V_D<0$. It typically conducts heavily when $|V_D|$ reaches roughly 0.5–0.7 V. Minority-carrier injection can trigger latch-up in CMOS.

### Positive $V_{sub}$ with $V_D>0$

With $V_{SB}=-V_{sub}$, the threshold falls and channel current increases. The source–bulk junction is forward biased, as is the drain–bulk junction when $V_D<V_{sub}$. With significant forward conduction, the lateral npn can add drain current independently of the gate when the drain collects carriers. Latch-up is possible in CMOS.

## Grading notes

The two cases have equal weight.

- +2 — Explains source–drain role reversal, increasing reverse triode current, and substantial drain–bulk forward conduction around $V_D=-0.6\ \mathrm{V}$. Also explains the lower threshold and increased current for positive $V_{sub}$, followed by source/drain junction conduction and parasitic bipolar action and latch-up risk around 0.6 V.
- +1 — Both cases are otherwise correct with one junction effect missing.
- 0 — One case is correct and the other is missing or wrong.
- −2 (asserted as fact) — Claiming cutoff at negative $V_D$, an increased threshold at positive $V_{sub}$, or junctions remaining reverse biased.

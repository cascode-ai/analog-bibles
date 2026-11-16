# Golden Solution - R172

## Reference answer

$V_{in,CM,min} \approx 1.23$ V and $V_{in,CM,max} \approx 2.32$ V (1.17 V and 2.09 V without body effect).
- Overdrives: $M_1$ at 0.25 mA: $\sqrt{2(0.25\ \mathrm{m})/(134\ \mu\times100)} = 0.193$ V; tail at 0.5 mA: 0.273 V; $M_3$ at 0.25 mA: $\sqrt{2(0.25\ \mathrm{m})/(38.4\ \mu\times20)} = 0.807$ V, so $|V_{GS3}| = 1.607$ V.
- Minimum: the tail needs $V_P \ge 0.273$ V; $V_{TH1}(V_{SB} = 0.273) = 0.761$ V; $V_{in,CM} \ge 0.273 + 0.193 + 0.761 = 1.227$ V.
- Maximum: $M_1$ saturated needs $V_{in,CM} \le V_X + V_{TH1}$ with $V_X = V_{DD} - |V_{GS3}| = 1.393$ V. At this point $V_P = V_X - 0.193 = 1.20$ V and $V_{TH1} = 0.7 + 0.45(\sqrt{2.1} - \sqrt{0.9}) = 0.925$ V, so $V_{in,CM} \le 2.318$ V.

## Grading notes

Two bounds, equal weight. +2: min ≈ 1.22–1.24 V and max ≈ 2.30–2.33 V with body effect, from $V_{GS1} + V_{ov,SS}$ and $V_{DD} - |V_{GS3}| + V_{TH1}$. +1: body effect neglected (1.17 V and 2.09 V) with otherwise correct reasoning, or one slip. 0: one bound right. -2 (asserted as fact): maximum taken as $V_{DD}$ or $V_{DD} - |V_{THP}| + V_{TH}$ (ignoring the load's overdrive), minimum without the tail headroom (≈ 0.89–0.95 V), or the diode drop computed with $\mu_nC_{ox}$.

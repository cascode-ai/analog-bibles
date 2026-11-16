# Golden Solution - R153

## Reference answer

Each output can swing between $V_{DD} = 3$ V and $V_{in,CM} - V_{TH1} \approx 0.44$ V, i.e. ≈ 2.56 V peak-to-peak single-ended, or ≈ 5.1 V peak-to-peak differential (centered on an output CM level of ≈ 1.72 V). Without body effect: 0.5 V, 2.5 V and 5.0 V.
- $M_1$, $M_2$ must stay saturated: $V_{out} \ge V_{in} - V_{TH1}$; with small input swing this is $V_{in,CM} - V_{TH1}$. The upper limit is $V_{DD}$ (output when the transistor's current goes to zero).
- Overdrive at 0.25 mA: $\sqrt{2(0.25\ \mathrm{mA})/(134\ \mu \times 100)} = 0.193$ V. $V_P = 1.2 - 0.193 - V_{TH1}$ and $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - \sqrt{0.9})$ give $V_P \approx 0.25$ V, $V_{TH1} \approx 0.756$ V, so $V_{out,min} \approx 0.444$ V.
- Swing per output: 3 − 0.444 ≈ 2.56 V pp; differential $2 \times 2.56 \approx 5.1$ V pp (requires the output CM level at the middle, $(3 + 0.444)/2 \approx 1.72$ V).

## Grading notes

+2: lower limit $V_{in,CM} - V_{TH}$ with body effect (≈ 0.44 V, ±0.02 V) and upper limit $V_{DD}$, giving ≈ 2.55 V pp single-ended or ≈ 5.1 V pp differential (either clearly stated). +1: body effect neglected (0.5 V, 2.5 V, 5.0 V) with otherwise correct reasoning, or the right limits with an arithmetic slip. 0: correct limit expressions without numbers. -2 (asserted as fact): lower limit taken as $V_{in,CM} - V_{GS}$ or as the overdrive only (e.g., 0.19 V), upper limit below $V_{DD}$ for a resistive load (e.g., $V_{DD} - V_{TH}$), or swing computed from the tail headroom.

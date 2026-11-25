# Golden Solution - R019

## Reference answer

The PMOS source is at $V_{in}$ and the gate is fixed at $1\,\mathrm{V}$. With body effect, $V_{out}=0$ through $V_{in}\approx1.9816\,\mathrm{V}$. Turn-on is set by $V_{SG}=|V_{TH}|$.

$$V_{SG}=V_{in}-1\,\mathrm{V},\qquad V_{SD}=V_{in}-V_{out},\qquad V_{BS}=V_{DD}-V_{in}.$$

Use the given body-effect law and define $V_{ov}=V_{SG}-|V_{TH}|$. With $\lambda=0$, the conducting branches follow from $I_{SD}=V_{out}/R_1$.

| Region | Condition | Output equation |
|---|---|---|
| Saturation | $V_{SD}\ge V_{ov}>0$ | $V_{out}=\beta_p R_1 V_{ov}^2/2$ |
| Triode | $0<V_{SD}<V_{ov}$ | $V_{out}=\beta_p R_1(V_{ov}V_{SD}-V_{SD}^2/2)$ |

The curve starts with zero slope and rises as the square of overdrive in saturation. The transition occurs at $V_{out}=1\,\mathrm{V}+|V_{TH}(V_{in})|$. That output level ranges from $1.80\,\mathrm{V}$ at the 3 V endpoint toward $1.98\,\mathrm{V}$ for large $\beta_pR_1$.

For $\beta_p R_1\le2.5\,\mathrm{V}^{-1}$, the conducting branch stays in saturation throughout the sweep, reaching the boundary at 3 V in the equality case. Then $V_{out}(3\,\mathrm{V})=(0.72\,\mathrm{V}^2)\beta_p R_1$. For larger $\beta_p R_1$ the device enters triode before 3 V. In triode, a larger $\beta_p R_1$ brings the curve closer to $V_{out}=V_{in}$ from below.

![Computed PMOS transfer curves for two values of beta p R1](/q/R019/solution-r019.svg)

## Grading notes

+2: Correct PMOS source and polarity, cutoff until approximately 1.98 V (±0.05 V), a saturation rise governed by the square of overdrive, and a possible transition to triode depending on $\beta_p R_1$. In triode, the output approaches the input from below as $\beta_p R_1$ increases.

+1: Correct overall transfer with the body effect omitted and turn-on at about 1.8 V.

0: Correct turn-on with an incorrect conducting-region description.

-2 (asserted as fact): Nonzero output at low input, NMOS interpretation, or use of $V_{out}$ as the source.

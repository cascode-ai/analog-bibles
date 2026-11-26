# Golden Solution - R035

## Reference answer

In the ideal channel model, the stated capacitor voltage gives $V_X(0^-)=0\ \mathrm{V}$. When the upper plate drops by 3 V, the capacitor voltage is continuous and $V_X(0^+)=-3\ \mathrm{V}$.

Node X is the source during recovery. With fixed $V_{TH}=0.7\ \mathrm{V}$, $V_{DS}=-V_X<V_{GS}-V_{TH}=2.3\ \mathrm{V}-V_X$. The channel stays in triode and discharges $C_1$. The voltage approaches 0 V with a late-time constant $\tau=C_1/[\beta(2.3\ \mathrm{V})]$, used to scale the graph.

The grounded bulk junction conducts if X goes sufficiently negative. A fast clamp approximation limits the excursion near −0.6 to −0.7 V before recovery. The exact minimum depends on the junction and input edge.

![Node X voltage waveform](/q/R035/solution-vx.svg)

## Grading notes

- +2: Give the stated initial value, the ideal step to −3 V and triode recovery to 0 V. A sketch that instead explains the forward-biased bulk junction, approximate clamp and subsequent recovery to 0 V also earns full credit.
- +1: Correct jump and final value with the region or discharge mechanism omitted.
- 0: Correct jump with a wrong final value due to a slip, or correct final value with the jump missed.
- −2 (asserted as fact): X stays at −3 V, settles at $V_{DD}-V_{TH}$, or jumps upward.

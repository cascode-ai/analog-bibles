# Golden Solution - A244

## Reference answer

Add two voltage-controlled voltage sources in series with an input of the ideal op amp, next to $V_{OS}$ and the $v_1/\mathrm{CMRR}$ source: one of value $v_{dd}/\mathrm{PSRR}^+$ and one of value $v_{ss}/\mathrm{PSRR}^-$, where $v_{dd}$ and $v_{ss}$ are the small-signal variations of $V_{DD}$ and $V_{SS}$.

- With the signal inputs grounded, a supply variation $v_{dd}$ then gives $v_{out} = A_v v_{dd}/\mathrm{PSRR}^+$, i.e. $v_{out}/v_{dd} = A_v/\mathrm{PSRR}^+ = A_{dd}$, which is exactly the supply gain implied by the definition $\mathrm{PSRR}^+ = A_v/A_{dd}$; likewise for $v_{ss}$.
- The sources are input-referred, like $V_{OS}$ and the CMRR source; their polarity is set by the sign of the supply gain, and for frequency-dependent behavior they become $v_{dd}/\mathrm{PSRR}^+(s)$ and $v_{ss}/\mathrm{PSRR}^-(s)$.
- With all effects present (small-signal, superposition): $v_{out} \approx A_v\left[v_1 - v_2 + \dfrac{v_1}{\mathrm{CMRR}} + V_{OS} + \dfrac{v_{dd}}{\mathrm{PSRR}^+} + \dfrac{v_{ss}}{\mathrm{PSRR}^-}\right]$.

(Equivalently, sources $A_{dd}v_{dd}$ and $A_{ss}v_{ss}$ could be added at the output, but the input-referred form fits the model of the figure.)

## Grading notes

+2: two supply-controlled sources $v_{dd}/\mathrm{PSRR}^+$ and $v_{ss}/\mathrm{PSRR}^-$ placed in series with an input (or an equivalent output-referred pair $A_v v_{dd}/\mathrm{PSRR}^+$, $A_v v_{ss}/\mathrm{PSRR}^-$), with a check that this reproduces the definition. +1: correct placement but only one supply treated, or no justification. 0: idea of a supply-dependent source without correct scaling. −2 (asserted as fact): source value $v_{dd}\cdot\mathrm{PSRR}$ (inverted scaling), or modeling PSRR by changing $R_{out}$ or $R_{id}$.

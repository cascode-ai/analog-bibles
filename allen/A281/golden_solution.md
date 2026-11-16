# Golden Solution - A281

## Reference answer

Cause: M10, the nulling resistor in series with $C_c$, turns off when the output is high, which disconnects the compensation capacitor; the uncompensated op amp is unstable in unity gain, so it oscillates near the positive peaks.

- M10 carries no dc current, so its source and drain sit at the dc output voltage $v_{out}$. Its gate is at $V_{DD}$: $V_{GS10} = 2.5 - v_{out}$, while its source–bulk voltage $V_{SB} = v_{out} + 2.5$ V raises its threshold: $V_{T10} = 0.7 + 0.35\left(\sqrt{0.5 + v_{out} + 2.5} - \sqrt{0.5}\right)$.
- $V_{GS10} = V_{T10}$ at $v_{out} \approx 1.32$ V ($V_{T10}$ ≈ 1.18 V). At $v_{out} = 1.5$ V: $V_{GS10} = 1.0$ V < $V_{T10} = 1.19$ V → M10 is off, $C_c$ is effectively removed and the loop has no dominant pole: it oscillates over the top part of the swing, exactly where the waveform shows ringing. (Already at $v_{out}$ = 1 V the on-resistance $1/[K'_N(V_{GS10} - V_{T10})]$ ≈ 100 kΩ, versus ≈ 25 kΩ at 0 V and $1/g_{m6}$ ≈ 5 kΩ, so the compensation degrades as the output rises.) On the negative half-cycle $V_{GS10}$ is large and the circuit is stable.
- Fixes: move M10 to the other side of $C_c$ (between node 4 and $C_c$), where its source/drain sit at the nearly constant first-stage output level ≈ $V_{SS} + V_{GS6}$ ≈ −1.4 V, so $V_{GS10}$ ≈ 3.9 V and $V_{SB}$ is small: M10 stays on with a constant resistance; and/or put a p-channel transistor (gate at $V_{SS}$) in parallel with M10 to form a transmission gate that conducts at high output voltages; or bias the gate of M10 from a tracking circuit so that its resistance stays at the design value.

## Grading notes

+2: identifies that M10 (gate at $V_{DD}$, source/drain at the output level, threshold raised by body effect) cuts off when $v_{out}$ approaches +1.5 V (turn-off near 1.3 V), removing $C_c$ and the compensation, and proposes a valid fix (relocate M10 to the first-stage-output side of $C_c$, add a parallel PMOS / transmission gate, or bias the gate appropriately). +1: correct cause without the body-effect/threshold calculation, or a correct calculation with a weak fix. 0: says the nulling resistor changes with output voltage but does not conclude it turns off, or gives only a generic fix ("increase $C_c$"). −2 (asserted as fact): oscillation attributed to slew-rate limiting, to the output stage saturating, to M6 or M7 cutting off, or a "fix" that keeps M10 at the output side with its gate at $V_{DD}$ unchanged.

# Golden Solution - A100

## Reference answer

With $I$ the common current of the two branches,

$I = \dfrac{2}{K'R^2}\left(\dfrac{1}{\sqrt{(W/L)_1}} - \dfrac{1}{\sqrt{(W/L)_2}}\right)^2$, and $I_{out} = \dfrac{(W/L)_5}{(W/L)_2}\,I$ ($= I$ if M5 is the same size as M2).

- The M3–M4 mirror forces equal currents $I$ in both branches; M1 and M2 each carry $I$.
- M1's gate is at the top of $R$ and its drain at the bottom, which is also M2's gate: $V_{GS1} = V_{GS2} + IR$.
- With $V_{GS} = V_T + \sqrt{2I/(K'W/L)}$: $IR = \sqrt{2I/K'}\left(1/\sqrt{(W/L)_1} - 1/\sqrt{(W/L)_2}\right)$, i.e. $\sqrt{I} = \dfrac{1}{R}\sqrt{\dfrac{2}{K'}}\left(\dfrac{1}{\sqrt{(W/L)_1}} - \dfrac{1}{\sqrt{(W/L)_2}}\right)$, which gives the result. A positive solution requires $(W/L)_1 < (W/L)_2$.
- M5 shares M2's gate–source voltage, so it copies $I$ in the ratio $(W/L)_5/(W/L)_2$.
- To first order $I_{out}$ does not depend on $V_{DD}$ or $V_T$. Like other self-biased references, the circuit also has a zero-current state and needs a start-up circuit.

## Grading notes

+2: $V_{GS1} - V_{GS2} = IR$ leading to $I = \frac{2}{K'R^2}(1/\sqrt{(W/L)_1} - 1/\sqrt{(W/L)_2})^2$ (or the equivalent implicit form), and $I_{out}$ as the M5/M2 copy (= $I$ for equal sizes). +1: correct equation but left implicit in $I$ without noting the solution, or the M5 scaling omitted while assuming M5 = M2 tacitly. 0: correct loop equation with an algebra slip. −2 (asserted as fact): $V_{GS2} - V_{GS1} = IR$ with M2 smaller required, a result depending on $V_{DD}$, or the resistor current taken as different from the mirror current.

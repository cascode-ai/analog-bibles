# Golden Solution - R395

## Reference answer

$Z_{in} = 0$ (virtual ground), $Z_{out} = \dfrac{1 + g_{m2}R_S}{g_{m1}g_{m2}R_S} = \dfrac{1}{g_{m1}} + \dfrac{1}{g_{m1}g_{m2}R_S}$, $\dfrac{V_{out}}{V_{in}} = -\dfrac{1}{g_{m2}R_S}$.

- Topology: $M_1$ is a common-source amplifier (input node N to $V_{out}$); the source follower $M_2$ senses $V_{out}$ and returns a current to N: shunt–shunt (voltage–current) feedback, negative (N↑ → $V_{out}$↓ → N↓).
- The output node is connected only to the ideal current source, the drain of $M_1$ (λ = 0) and the gate of $M_2$, so the open-loop output resistance and hence the loop gain are infinite.
- $Z_{in}$: closed-loop value $Z_{in,open}/(1+T) \to 0$; directly, KCL at the output forces $g_{m1}v_N = 0$, so N stays at ac ground for any injected current (absorbed by $M_2$).
- Gain: the current $V_{in}/R_S$ entering the virtual ground must be removed by $M_2$: $g_{m2}(V_{out} - 0) = -V_{in}/R_S$.
- $Z_{out}$ ($V_{in}$ = 0): $v_N = g_{m2}v_X R_S/(1 + g_{m2}R_S)$ and $I_X = g_{m1}v_N$; equivalently $R_{out,open}/(1+T)$ in the limit $R_{out,open} \to \infty$.

## Grading notes

+2: all three results correct (a $Z_{in}$ that includes $R_S$, i.e. $R_S$, is acceptable if the answer says so). +1: two of the three correct and the third with a minor slip. 0: one correct with a sound method, the others wrong. -2 (asserted as fact): a positive gain, $Z_{in} = 1/g_{m2}$ or another finite value obtained by ignoring the infinite loop gain, $Z_{out}$ raised by the feedback, or $M_2$ read as a common-gate or PMOS device.

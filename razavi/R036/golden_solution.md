# Golden Solution - R036

## Reference answer

### Voltage jump

With $V_{C1}=V_{in}-V_X$ continuous at the step, $V_X(0^-)=-3\ \mathrm{V}$ and $V_X(0^+)=0\ \mathrm{V}$.

### Saturation charging

Ignore parasitic capacitance and take $\lambda=0$. After the step, $V_{DS}=V_{GS}=3\ \mathrm{V}-V_X$. The condition $V_{DS}\ge V_{GS}-V_{TH}$ holds while $M_1$ conducts. The charging law and initial current are

$$
C_1\frac{dV_X}{dt}=I_D,\qquad
I_D=\frac{\beta}{2}(V_{GS}-V_{TH})^2,\qquad
I_D(0^+)=\frac{\beta}{2}(2.3\ \mathrm{V})^2=(2.645\ \mathrm{V^2})\beta.
$$

The initial slope is $I_D(0^+)/C_1$.

### Final voltage

The current approaches zero at $V_{GS}=V_{TH}$. Using $V_{SB}=V_X$ in the body-effect law gives the final-voltage equation

$$
V_{DD}-V_{X,\infty}
=V_{TH0}+\gamma\left(
\sqrt{2|\phi_F|+V_{X,\infty}}-\sqrt{2|\phi_F|}
\right).
$$

With the given parameters, $V_X$ rises toward $V_{X,\infty}\approx1.97\ \mathrm{V}$ with decreasing slope. Setting $\gamma=0$ gives $V_{DD}-V_{TH0}=2.30\ \mathrm{V}$.

![R036 source-follower waveform](/q/R036/solution-vx.svg)

## Grading notes

- +2 for a jump from −3 V to 0 V followed by a source-follower rise toward 1.97 V (±0.05 V), with body effect and a decreasing slope.
- +1 for the 2.3 V result with body effect omitted, or for an otherwise correct answer that omits the jump.
- 0 for the correct direction with an arithmetic error in the final voltage.
- −2 for asserting that $V_X$ rises to 3 V, falls after the step, or settles at 0 V.

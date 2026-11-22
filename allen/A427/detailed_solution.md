# Detailed solution - A427

The offset source sits in series with the noninverting input, so the inverting input is held at $V_{OS}$ instead of ground. This changes the current in every closed input resistor and also lifts the output by $V_{OS}$. Writing KCL at the inverting node gives the output for any code; the result is an offset plus a gain error, both caused by $V_{OS}$.

### Step 1 — KCL at the inverting input

With an otherwise ideal op amp, $v_-=v_+=V_{OS}$. A closed switch $b_i$ drives $(V_{REF}-V_{OS})/R_{i+1}$ into the node; an open switch carries nothing. All of this current flows through $R_0$:

$$
\frac{V_{OS}-v_{out}}{R_0}=(V_{REF}-V_{OS})\sum_{i=0}^{3}\frac{b_i}{R_{i+1}} .
$$

With $R_0=R$ and $R_{i+1}=2^{i+1}R$, the sum times $R_0$ is the code fraction

$$
D=\frac{b_0}2+\frac{b_1}4+\frac{b_2}8+\frac{b_3}{16}=\frac k{16}\qquad(k=0\ldots15),
$$

so

$$
v_{out}=V_{OS}-D\,(V_{REF}-V_{OS})=-D\,V_{REF}+(1+D)\,V_{OS}.
$$

The second form shows that $V_{OS}$ is amplified by the noise gain $1+R_0\sum b_i/R_{i+1}=1+D$, which depends on how many switches are closed.

### Step 2 — Numerical characteristic

With $V_{OS}=0.0645V_{REF}$:

$$
\frac{v_{out}}{V_{REF}}=0.0645-0.9355\,\frac k{16}.
$$

| Code | 0000 | 0001 | 0100 | 1000 | 1100 | 1111 |
|---|---|---|---|---|---|---|
| $v_{out}/V_{REF}$ | +0.0645 | +0.0060 | −0.1694 | −0.4032 | −0.6371 | −0.8125 |
| Ideal | 0 | −0.0625 | −0.25 | −0.5 | −0.75 | −0.9375 |
| Error (LSB) | +1.03 | +1.10 | +1.29 | +1.55 | +1.81 | +2.00 |

The error column is $(1+D)V_{OS}$ in units of $\mathrm{LSB}=V_{REF}/16$.

![4-bit DAC staircase with VOS = 0.0645 VREF compared with the ideal staircase](/q/A427/solution-curves.svg)

### Step 3 — Interpretation

The transfer curve is still a uniform, monotonic staircase, but:

- at code 0000 it starts at $+0.0645V_{REF}$, about $+1$ LSB, on the opposite side of zero from the signal (an offset);
- every step is $0.9355$ LSB instead of 1 LSB, i.e. the gain is reduced by the factor $1-V_{OS}/V_{REF}=0.9355$ (a gain error of about $-6.5$ %, close to $-1/16$);
- the total error grows linearly from 1.03 LSB at 0000 to exactly 2 LSB at 1111, where $(31/16)V_{OS}=0.125V_{REF}$.

There is no nonlinearity, because the error is linear in $D$; the offset voltage appears as a combination of offset and gain error rather than as a pure offset.

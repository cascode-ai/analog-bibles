# Detailed solution - G423

Close the loops one at a time. First substitute the CMFB relation $v_{cmc}=a_{cms}v_{oc}$ into the op-amp model, giving an op amp with effective gains $a'$. Then add the resistive feedback network, which relates the op-amp input voltages to the source and output voltages. Because the cross gains are small, each closed-loop gain follows from a single-loop formula; an exact solve of the linear equations confirms the values.

### Step 1 — Feedback network

No current enters the op amp, so each input node is a divider between its source (through $R_1=10$ kΩ) and its output (through $R_3=40$ kΩ):

$$
v_{i1}=\frac{R_3v_{s1}+R_1v_{o1}}{R_1+R_3}=0.8v_{s1}+0.2v_{o1},
$$

and likewise for $v_{i2}$. Taking differences and averages,

$$
v_{id}=0.8v_{sd}+0.2v_{od},\qquad v_{ic}=0.8v_{sc}+0.2v_{oc}.
$$

### Step 2 — Effect of the CMFB loop on the op-amp gains

Substituting $v_{cmc}=a_{cms}v_{oc}$ into the $v_{oc}$ equation:

$$
v_{oc}=\frac{a_{cm}v_{ic}+a_{dm-cm}v_{id}}{1+T_{cmfb}},\qquad
T_{cmfb}=-a_{cmc}a_{cms}=-(-226)(0.76)=171.8 .
$$

So the CMFB divides both CM-output gains by 172.8:

$$
a'_{cm}=\frac{-2.89}{172.8}=-0.01673,\qquad a'_{dm-cm}=\frac{8.95}{172.8}=0.0518 .
$$

The DM output also receives $a_{cmc-dm}v_{cmc}=a_{cmc-dm}a_{cms}v_{oc}$, which adds an indirect CM-to-DM path:

$$
a'_{cm-dm}=a_{cm-dm}+a'_{cm}a_{cms}a_{cmc-dm}=0.15+(-0.01673)(0.76)(11.6)=0.15-0.1475=0.00252 .
$$

The indirect path nearly cancels the direct one. (The corresponding correction to $a_{dm}$, $a'_{dm-cm}a_{cms}a_{cmc-dm}=+0.46$, is negligible against $-181$.)

### Step 3 — Loop gains of the resistive feedback

With $v_{id}$ and $v_{ic}$ each fed back through the factor 0.2:

$$
T_{dm}=(-a_{dm})\frac{R_1}{R_1+R_3}=(181)(0.2)=36.2,\qquad
T_{cm}=(-a'_{cm})(0.2)=(0.01673)(0.2)=0.00335 .
$$

### Step 4 — Closed-loop gains

DM input ($v_{sc}=0$): $v_{od}=a_{dm}(0.8v_{sd}+0.2v_{od})$, so

$$
A_{dm}=\frac{0.8a_{dm}}{1-0.2a_{dm}}=-\frac{R_3}{R_1}\cdot\frac{T_{dm}}{1+T_{dm}}=-4\cdot\frac{36.2}{37.2}=-3.89 .
$$

The resulting $v_{id}=0.8v_{sd}/(1+T_{dm})$ drives $v_{oc}$ through $a'_{dm-cm}$, and the CM loop then divides by $1+T_{cm}$:

$$
A_{dm-cm}=\frac{0.8\,a'_{dm-cm}}{(1+T_{dm})(1+T_{cm})}=\frac{(0.8)(0.0518)}{(37.2)(1.003)}=1.11\times10^{-3}.
$$

CM input ($v_{sd}=0$): $v_{oc}=a'_{cm}(0.8v_{sc}+0.2v_{oc})$, so

$$
A_{cm}=\frac{0.8\,a'_{cm}}{1+T_{cm}}=\frac{(0.8)(-0.01673)}{1.003}=-0.0133 .
$$

The resulting $v_{ic}\approx0.8v_{sc}/(1+T_{cm})$ drives $v_{od}$ through $a'_{cm-dm}$, and the DM loop divides by $1+T_{dm}$:

$$
A_{cm-dm}=\frac{0.8\,a'_{cm-dm}}{(1+T_{dm})(1+T_{cm})}=\frac{(0.8)(0.00252)}{(37.2)(1.003)}=5.4\times10^{-5}.
$$

### Step 5 — Exact check and summary

Solving the five linear equations (two op-amp equations, two feedback relations and $v_{cmc}=a_{cms}v_{oc}$) exactly gives the same values:

| Gain | Single-loop formulas | Exact solve |
|---|---|---|
| $A_{dm}$ | −3.89 | −3.892 |
| $A_{cm}$ | −0.0133 | −0.01334 |
| $A_{dm-cm}$ | $1.11\times10^{-3}$ | $1.113\times10^{-3}$ |
| $A_{cm-dm}$ | $5.4\times10^{-5}$ | $5.42\times10^{-5}$ |

The DM feedback makes $A_{dm}$ close to $-R_3/R_1=-4$, and the CMFB loop is what makes $A_{cm}$ and $A_{dm-cm}$ small. Without it ($v_{cmc}=0$) they would be $0.8a_{cm}/(1-0.2a_{cm})=-1.47$ and about $0.12$; and without the indirect path through $a_{cmc-dm}$, $A_{cm-dm}$ would be about $0.8a_{cm-dm}/(1+T_{dm})=3.2\times10^{-3}$.

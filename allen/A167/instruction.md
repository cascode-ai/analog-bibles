For the cascode amplifier shown in [Fig. 1] (the source of M1 at ground, all potentials referred to ground), the lowest output voltage $v_{OUT}(\min)$ is reached when $v_{IN}$ is taken to $V_{DD}$. Then M1 and M2 operate in the nonsaturation region while M3 stays saturated, and with $\beta_i = K'_i W_i/L_i$ the three drain currents are

$i_{D1} = \beta_1\left[(V_{DD}-V_{T1})v_{DS1} - \frac{v_{DS1}^2}{2}\right] \cong \beta_1(V_{DD}-V_{T1})v_{DS1}$

$i_{D2} = \beta_2\left[(V_{GG2}-v_{DS1}-V_{T2})(v_{OUT}-v_{DS1}) - \frac{(v_{OUT}-v_{DS1})^2}{2}\right] \cong \beta_2(V_{GG2}-v_{DS1}-V_{T2})(v_{OUT}-v_{DS1})$

$i_{D3} = \frac{\beta_3}{2}(V_{DD}-V_{GG3}-|V_{T3}|)^2$

where $v_{DS1}$ and $v_{OUT}$ have been assumed small. Show how to derive from these equations, for $\beta_1 = \beta_2$,

$v_{OUT}(\min) = \frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac{1}{V_{GG2}-V_{T2}} + \frac{1}{V_{DD}-V_{T1}}\right)$.

Hint: assume that $V_{GG2} - V_{T2}$ is greater than $v_{DS1}$ and express $i_{D2} \approx \beta_2(V_{GG2}-V_{T2})v_{DS2}$. Solve for $v_{OUT}$ as $v_{DS1} + v_{DS2}$ and simplify accordingly. Channel-length modulation and the body effect are neglected.

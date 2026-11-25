# Detailed solution - R019

**Approach:** Use the load current balance to compute the transfer curve. Evaluate the threshold at the body bias set by the input.

### Terminal voltages and body effect

Let $I_{SD}$ be the positive channel current from source to drain. With gate and junction leakage neglected, the output-node KCL is

$$I_{SD}=\frac{V_{out}}{R_1}.$$

For $0\le V_{in}\le V_{DD}$, a negative output would make both the channel and the resistor feed the output node. Above $V_{in}$, neither could feed it. Thus $0\le V_{out}\le V_{in}$. The higher-potential input terminal is the PMOS source. The figure fixes the gate at $1\,\mathrm{V}$ and the problem ties the well to $V_{DD}=3\,\mathrm{V}$.

$$V_{SG}=V_{in}-1\,\mathrm{V},\qquad V_{SD}=V_{in}-V_{out},\qquad V_{BS}=V_{DD}-V_{in}.$$

The source and drain junctions to the well have zero or reverse bias. Use the long-channel square-law model with $\lambda=0$ and the threshold magnitude

$$|V_{TH}|=|V_{TH0}|+\gamma\left(\sqrt{2|\phi_F|+V_{BS}}-\sqrt{2|\phi_F|}\right).$$

Here $|V_{TH0}|=0.8\,\mathrm{V}$, $\gamma=0.4\,\mathrm{V}^{1/2}$ and $2|\phi_F|=0.8\,\mathrm{V}$. As $V_{in}$ rises, $V_{BS}$ falls and $|V_{TH}|$ decreases.

### Cutoff and saturation

Define the overdrive $V_{ov}=V_{SG}-|V_{TH}|$. The turn-on input $V_{in,on}$ is the unique root of $V_{ov}=0$, since $V_{SG}$ increases and $|V_{TH}|$ decreases with input. Substitution into the threshold law yields $V_{in,on}=1.98162\,\mathrm{V}$ (compared with $1.8\,\mathrm{V}$ at fixed threshold). For $V_{in}\le V_{in,on}$, $I_{SD}=0$ and KCL gives $V_{out}=0$.

Just above turn-on, $V_{SD}\ge V_{ov}>0$, so the channel is saturated. The saturation current and KCL give

$$V_{out}=\frac{\beta_p R_1}{2}V_{ov}^2,\qquad V_{out}\le 1\,\mathrm{V}+|V_{TH}|.$$

The inequality follows by substituting the terminal voltages into $V_{SD}\ge V_{ov}$. Along this branch, $dV_{out}/dV_{in}=\beta_p R_1 V_{ov}\,dV_{ov}/dV_{in}$. The slope is zero at turn-on and increases in saturation, since $V_{ov}$ and its positive derivative increase with input. The square law applies to overdrive, whose input dependence includes the body effect.

### Transition and triode

The saturation solution increases while the boundary level $1\,\mathrm{V}+|V_{TH}|$ decreases. At $V_{in}=3\,\mathrm{V}$, $V_{BS}=0$, $V_{ov}=1.2\,\mathrm{V}$ and the boundary level is $1.8\,\mathrm{V}$. Therefore a transition occurs before 3 V exactly when

$$ (0.72\,\mathrm{V}^2)\beta_p R_1>1.8\,\mathrm{V}
\qquad\Longleftrightarrow\qquad
\beta_p R_1>2.5\,\mathrm{V}^{-1}.$$

At equality the boundary lies at 3 V. For smaller $\beta_p R_1$, the conducting branch remains saturated and $V_{out}(3\,\mathrm{V})=(0.72\,\mathrm{V}^2)\beta_p R_1$.

In triode, $0<V_{SD}<V_{ov}$ and the current law gives

$$\frac{V_{out}}{R_1}=\beta_p\left(V_{ov}V_{SD}-\frac{V_{SD}^2}{2}\right).$$

At $V_{SD}=V_{ov}$ the current matches the saturation value and its partial derivative with respect to $V_{SD}$ vanishes. The two transfer branches therefore join with continuous slope. At fixed input above turn-on, increasing $\beta_pR_1$ reduces the drop $V_{in}-V_{out}$ on the triode branch. When $V_{SD}\ll V_{ov}$, the channel resistance is approximately $1/(\beta_p V_{ov})$ and the output approaches $V_{in}$ from below as $\beta_p R_1$ grows.

### Computed curves

For $\beta_p R_1=1\,\mathrm{V}^{-1}$ the 3 V output is $(0.72\,\mathrm{V}^2)(1\,\mathrm{V}^{-1})=0.720\,\mathrm{V}$ in saturation. For $\beta_p R_1=10\,\mathrm{V}^{-1}$, solving $V_{out}=1\,\mathrm{V}+|V_{TH}|$ on the saturation branch gives the boundary at $V_{in}=2.5120\,\mathrm{V}$ and $V_{out}=1.8962\,\mathrm{V}$. The triode equation gives $V_{out}=2.7440\,\mathrm{V}$ at 3 V. The plot shows both parameter choices over the full input sweep.

![Computed PMOS transfer curves for two values of beta p R1](/q/R019/solution-r019.svg)

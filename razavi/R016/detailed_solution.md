# Detailed solution - R016

**Approach:** Use the output-node current balance and the long-channel NMOS model to compute the transfer curve.

### Terminal voltages and cutoff

With gate and junction leakage neglected, KCL at the output gives $I_D=V_{out}/R_1$, where $I_D$ is the channel current from the fixed supply into the output. The $1\,\mathrm{V}$ source feeds the load through the channel. A negative output would make both the channel and $R_1$ feed the node. At or above $1\,\mathrm{V}$ the channel could supply no positive current to the load. Hence $0\le V_{out}<1\,\mathrm{V}$. In the symmetric MOS model the lower-potential output is the electrical source. Both diffusion junctions to the grounded bulk are at zero or reverse bias.

$$V_{GS}=V_{in}-V_{out},\quad V_{DS}=1\,\mathrm{V}-V_{out},\quad V_{SB}=V_{out}.$$

The body-effect law is

$$V_{TH}(V_{out})=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right).$$

Use $V_{TH0}=0.7\,\mathrm{V}$, $\gamma=0.45\,\mathrm{V}^{1/2}$ and $2|\phi_F|=0.9\,\mathrm{V}$. At $V_{out}=0$ the threshold is $0.7\,\mathrm{V}$, so $V_{in}\le0.7\,\mathrm{V}$ gives cutoff and $V_{out}=0$. At the upper voltage limit $V_{out}=1\,\mathrm{V}$ the threshold would be $0.89337\,\mathrm{V}$.

### Saturation branch and slope

Define $V_{ov}=V_{GS}-V_{TH}(V_{out})$. Just above turn-on, $V_{ov}$ is small and $V_{DS}$ is near $1\,\mathrm{V}$, so the channel is saturated. With $\lambda=0$, the square law and KCL give

$$\frac{V_{out}}{R_1}=\frac{\beta}{2}V_{ov}^2.$$

On the conducting branch, the positive square root gives

$$V_{in}=V_{out}+V_{TH}(V_{out})+\sqrt{\frac{2V_{out}}{\beta R_1}}.$$

For either conducting region, let $\eta=dV_{TH}/dV_{out}>0$. Let $g_m=\partial I_D/\partial V_{GS}$ and $g_{ds}=\partial I_D/\partial V_{DS}$ be the intrinsic derivatives with the other terminal biases fixed. Since $dV_{GS}=dV_{in}-dV_{out}$ and $dV_{DS}=-dV_{out}$, differentiating KCL gives

$$\frac{dV_{out}}{dV_{in}}=\frac{g_m}{1/R_1+(1+\eta)g_m+g_{ds}}.$$

In saturation, $g_m=\beta V_{ov}$ and $g_{ds}=0$. The slope is positive, less than one, and tends to zero at turn-on.

### Transition and triode branch

The saturation condition $V_{DS}\ge V_{ov}$ reduces to $V_{in}\le 1\,\mathrm{V}+V_{TH}(V_{out})$ while the channel conducts. Denote the input and output at the boundary by $V_{in,k}$ and $V_{out,k}$. At equality, with $V_D=1\,\mathrm{V}$, KCL reduces to

$$V_{out,k}=\frac{\beta R_1}{2}(V_D-V_{out,k})^2.$$

The root with $0<V_{out,k}<V_D$ gives

$$V_{out,k}=V_D\left(1-\frac{2}{1+\sqrt{1+2\beta R_1 V_D}}\right),\qquad
V_{in,k}=V_D+V_{TH}(V_{out,k}),\quad V_D=1\,\mathrm{V}.$$

The product $\beta R_1$ has units of $\mathrm{V}^{-1}$, so $2\beta R_1 V_D$ is dimensionless. As $\beta R_1$ increases from zero to infinity in the model, $V_{out,k}$ increases from zero toward $V_D$. Body effect therefore places $V_{in,k}$ strictly between $1.700$ and about $1.89337\,\mathrm{V}$ for finite positive $\beta R_1$.

Above the transition, $0<V_{DS}<V_{ov}$ and KCL uses the triode law

$$\frac{V_{out}}{R_1}=\beta\left(V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right).$$

Here $g_m=\beta V_{DS}$ and $g_{ds}=\beta(V_{ov}-V_{DS})$. At the boundary $g_{ds}=0$ and both $g_m$ expressions agree, so the two branches join with continuous slope. The slope in triode remains positive. With increasing input it can become small as $V_{DS}$ shrinks. The model approaches $1\,\mathrm{V}$ asymptotically as input increases beyond the sweep at fixed $\beta R_1$. Within the specified sweep the output at 3 V can be far below that ceiling.

### Computed curves

For $\beta R_1=10\,\mathrm{V}^{-1}$, substituting $V_D=1\,\mathrm{V}$ into the boundary root gives $V_{out,k}=0.64174\,\mathrm{V}$ and $V_{in,k}=1.83184\,\mathrm{V}$. The figure numerically solves KCL with the threshold evaluated at each output voltage.

| $\beta R_1$ ($\mathrm{V}^{-1}$) | $V_{in,k}$ (V) | $V_{out,k}$ (V) | $V_{out}$ at $V_{in}=3\,\mathrm{V}$ (V) |
|---:|---:|---:|---:|
| 0.1 | 1.7107 | 0.0455 | 0.1449 |
| 10 | 1.8318 | 0.6417 | 0.9206 |
| 100 | 1.8715 | 0.8682 | 0.9911 |

![Computed output versus input for three values of beta R1](/q/R016/solution-r016.svg)

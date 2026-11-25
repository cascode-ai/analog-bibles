# Detailed solution - R021

**Approach:** Treat the bulk as the input. First solve the MOS-only operating point with a stated load, then mark the range where the source–bulk junction makes that model incomplete.

### Model and terminal voltages

The gate and the physical source are fixed at 2 V and 1 V, respectively:
$$V_{GS}=1\,\mathrm V,\qquad V_{SB}=1\,\mathrm V-V_{in},\qquad V_{out}=3\,\mathrm V-R_1I_D.$$
Define $\beta=\mu_nC_{ox}W/L$ in $\mathrm{A/V^2}$ and take $\lambda=0$. With junction current omitted,
$$V_{TH}=0.7\,\mathrm V+0.45\,\mathrm{V^{1/2}}\left(\sqrt{1.9\,\mathrm V-V_{in}}-\sqrt{0.9\,\mathrm V}\right).$$

### Saturation branch and load boundary

For saturation,
$$I_D=\frac{\beta}{2}(1\,\mathrm V-V_{TH})^2,\qquad V_{out}=3\,\mathrm V-R_1I_D,$$
and
$$V_{out}\ge2\,\mathrm V-V_{TH}.$$

At $V_{in}=0$, $V_{TH}=0.8934\,\mathrm V$ and $V_{ov}=1-V_{TH}=0.1066\,\mathrm V$. Substitution into the saturation condition gives
$$\beta R_1\le\frac{2(1+V_{TH})}{V_{ov}^2}=333.1\,\mathrm{V^{-1}}.$$
At $V_{in}=1.0\,\mathrm V$, the corresponding limit is $37.8\,\mathrm{V^{-1}}$. At $V_{in}=1.5\,\mathrm V$, $V_{TH}=0.5577\,\mathrm V$, $V_{ov}=0.4423\,\mathrm V$, and the limit is $15.9\,\mathrm{V^{-1}}$. Thus a load with $\beta R_1=10\,\mathrm{V^{-1}}$ stays saturated through 1.5 V, while $\beta R_1=30\,\mathrm{V^{-1}}$ can enter triode as $V_{in}$ rises.

For the light-load example $\beta R_1=10\,\mathrm{V^{-1}}$,
$$V_{out}(0)=3-\frac{10}{2}(0.1066\,\mathrm V)^2=2.943\,\mathrm V,$$
and at $V_{in}=1.5\,\mathrm V$,
$$V_{out}=3-\frac{10}{2}(0.4423\,\mathrm V)^2=2.022\,\mathrm V.$$

### Triode branch

When the saturation inequality fails, use
$$I_D=\beta\left[(1\,\mathrm V-V_{TH})(V_{out}-1\,\mathrm V)-\frac{(V_{out}-1\,\mathrm V)^2}{2}\right],$$
together with
$$V_{out}=3\,\mathrm V-R_1I_D.$$
This branch keeps $V_{out}$ above the 1 V source and flattens the transfer curve for heavier loads. For example, $\beta R_1=30\,\mathrm{V^{-1}}$ gives $V_{out}=1.65\,\mathrm V$ at $V_{in}=1\,\mathrm V$ and about $1.17\,\mathrm V$ at $1.5\,\mathrm V$. A very heavy load such as $\beta R_1=1000\,\mathrm{V^{-1}}$ starts close to 1 V.

### Slope, forward bias and conclusion

On a saturated MOS branch,
$$\frac{dV_{out}}{dV_{in}}=-R_1g_{mb},\qquad g_{mb}=\eta g_m,$$
where
$$g_m=\beta(1\,\mathrm V-V_{TH}),\qquad \eta=\frac{0.45\,\mathrm{V^{1/2}}}{2\sqrt{1.9\,\mathrm V-V_{in}}}.$$
As $V_{in}$ increases, $V_{TH}$ decreases, so $g_m$ and $\eta$ increase. The negative slope becomes steeper and the saturated curve is concave down. In the triode branch the load limits the current and the curve flattens toward 1 V.

For $V_{in}>1\,\mathrm V$, the source–bulk junction is forward biased. A weakly forward-biased junction may have a small current over part of the 1–1.5 V interval, while stronger forward bias can activate the parasitic lateral npn and pull $V_{out}$ lower. The current scale depends on junction, temperature and device parameters that are not supplied. The shaded 1.5–3 V region in the figure is therefore left unquantified.

![V_out versus V_in](/q/R021/solution-vout.svg)

The figure shows dense MOS-only samples for $\beta R_1=10$, $30$ and $1000\,\mathrm{V^{-1}}$. The curves are illustrative through 1.5 V, with the 1 V source shown as the lower bound.

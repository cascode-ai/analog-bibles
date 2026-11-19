# Detailed solution - R005

Find the threshold for each body bias, then translate the piecewise transfer curve and locate its region boundaries.

### Step 1 — Body-effect model

Determine the threshold dependence from the general model before inserting the device data. For an NMOS, the body-effect relation is

$$
V_{TH}(V_{SB})=V_{TH0}+\gamma
\left[\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right].
$$
$$
V_{TH}(V_{BS})=V_{TH0}+\gamma
\left[\sqrt{2|\phi_F|-V_{BS}}-\sqrt{2|\phi_F|}\right].
$$

Here $V_{TH0}$ is the zero-body-bias threshold ($V_{SB}=0$), $\gamma$ is the body-effect coefficient, and $|\phi_F|$ is the Fermi-potential magnitude. The model uses the depletion approximation and assumes negligible forward junction conduction; the plotted reverse-bias range is $V_{BS}\le0$.

The question sweeps $V_{BS}=V_B-V_S$, whereas the usual model uses $V_{SB}=V_S-V_B=-V_{BS}$; the second form therefore gives the requested parameter dependence. Reverse bias increases depletion charge, requiring a higher gate voltage to form the inversion layer and raising threshold. Ignore CLM and subthreshold conduction.

Insert $V_{TH0}=0.7$ V, $\gamma=0.45\ \mathrm{V^{1/2}}$ and $2|\phi_F|=0.9$ V, and define the numerical helper

$$
T(s)=0.7\ \mathrm V+(0.45\ \mathrm{V^{1/2}})
\left[\sqrt{0.9\ \mathrm V+s}-\sqrt{0.9\ \mathrm V}\right].
$$

$$
V_{TH}(V_{BS})=T(-V_{BS}),\qquad V_{SB}=-V_{BS}.
$$

$$
V_{TH}(-1\ \mathrm V)=0.7\ \mathrm V+(0.45\ \mathrm{V^{1/2}})
[\sqrt{1.9\ \mathrm V}-\sqrt{0.9\ \mathrm V}]=0.893\ \mathrm V.
$$

| $V_{BS}$ (V) | $V_{TH}$ (V) | $V_{TH}+0.5\ \mathrm V$ (V) |
|---|---|---|
| 0 | 0.700 | 1.200 |
| −1 | 0.893 | 1.393 |
| −2 | 1.039 | 1.539 |
| −3 | 1.162 | 1.662 |

### Step 2 — Regions and boundary coordinates

At fixed positive $V_{DS}$, the saturation condition is $V_{DS}\ge V_{GS}-V_{TH}$. Solving the equality for $V_{GS}$ gives the second boundary. The square-law branches are

$$
\frac{I_D}{\beta}=\begin{cases}
0,&u\le0,\\
u^2/2,&0<u\le V_{DS},\\
uV_{DS}-V_{DS}^2/2,&u>V_{DS},
\end{cases}\qquad u=V_{GS}-V_{TH}(V_{BS}).
$$

At $u=V_{DS}$ both branches give $I_D/\beta=V_{DS}^2/2$. The normalized slopes $d(I_D/\beta)/dV_{GS}$ both equal $V_{DS}$; the actual-current slopes $dI_D/dV_{GS}$ equal $\beta V_{DS}$. Thus the two segments join tangentially.

### Step 3 — Spacing and plotted examples

$$
\frac{dV_{TH}}{dV_{SB}}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}}>0.
$$

This sensitivity decreases with reverse bias, explaining the shrinking threshold spacings. Since body bias appears only in $V_{TH}$, all curves are horizontal translations. At equal overdrive they have equal current and slope.

For $V_{DS}=3$ V and $V_{GS}\le3$ V, the maximum overdrive is 2.3 V, so all conducting segments are saturated. For $V_{DS}=0.5$ V, the second-boundary coordinates are listed above. For example at $V_{BS}=-2$ V and $V_{GS}=2$ V, the 3-V curve gives $I_D/\beta=\tfrac12(2-1.039)^2\ \mathrm{V^2}=0.461\ \mathrm{V^2}$.

![Solution curves with axes, regions, boundaries and key values](/q/R005/solution-curves.svg)

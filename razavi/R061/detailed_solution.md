# Detailed solution - R061

### Step 1 — Locate the pinch-off point

The source and bulk are grounded, so $V_{GS}=V_G$, and the drain is fixed at $V_{DS}=1.2\ \mathrm{V}$. Let $x$ run from the source ($x=0$) to the drain ($x=L$), and let $V(x)$ be the local potential measured from the source. Where the channel is in strong inversion, the magnitude of the mobile charge per unit length in the gradual-channel model is

$$Q_d(x)=WC_{ox}\left[V_G-V(x)-V_{TH}\right],$$

where $W$ is the channel width and $C_{ox}$ is the gate oxide capacitance per unit area. As $V(x)$ rises from the source, the inversion charge decreases. At the pinch-off point $x_p$ it falls to zero, so

$$V(x_p)=V_G-V_{TH}\equiv V_{ov}.$$

Here $V_{ov}$ is the gate overdrive. A pinch-off point inside the device requires a formed channel at the source ($V_{ov}>0$) and a drain potential above $V_{ov}$.

### Step 2 — Check the threshold for channel formation

At the source, $V(0)=0$, so the channel can form there only if $V_G>V_{TH}=0.7\ \mathrm{V}$. At equality the model gives zero strong-inversion charge even at the source. Thus at or below threshold there is no formed channel and no pinch-off point in this model. Weak-inversion current is outside the scope of this model.

### Step 3 — Follow the pinch-off point in saturation

With $0<V_{ov}<V_{DS}$, inversion ends at $x_p<L$. Electrons cross the remaining high-field depleted gap of length $\Delta L=L-x_p$. Its voltage drop is

$$V_{gap}=V_{DS}-V_{ov}=V_{TH}+V_{DS}-V_G=1.9\ \mathrm{V}-V_G.$$

The upper edge of this range is $V_{TH}+V_{DS}=0.7\ \mathrm{V}+1.2\ \mathrm{V}=1.9\ \mathrm{V}$. For example, at $V_G=1.3\ \mathrm{V}$, $V(x_p)=1.3\ \mathrm{V}-0.7\ \mathrm{V}=0.6\ \mathrm{V}$, so $V_{gap}=1.2\ \mathrm{V}-0.6\ \mathrm{V}=0.6\ \mathrm{V}$. Raising $V_G$ to $1.6\ \mathrm{V}$ reduces $V_{gap}$ to $0.3\ \mathrm{V}$.

In the depletion picture, the smaller voltage drop corresponds to a shorter depleted gap. For intuition, the width of a uniformly doped one-dimensional depletion region sustaining a voltage $V_{gap}$ scales as $\sqrt{2\epsilon_{si}V_{gap}/(qN_{sub})}$, where $\epsilon_{si}$ is the silicon permittivity, $q$ is the elementary charge, and $N_{sub}$ is the substrate doping. This scaling illustrates the trend. The problem data do not determine the actual lateral gap length. As $\Delta L$ shrinks, the effective channel length $x_p=L-\Delta L$ grows and the pinch-off point moves toward the drain.

### Step 4 — Check the drain edge and the triode region

At $V_G=1.9\ \mathrm{V}$, the overdrive equals $V_{DS}$ and $V_{gap}=0$. The charge reaches zero exactly at the drain edge. For $V_G>1.9\ \mathrm{V}$, even at the drain, where the channel potential is highest,

$$Q_d(L)=WC_{ox}(V_G-V_{DS}-V_{TH})=WC_{ox}(V_G-1.9\ \mathrm{V})>0.$$

The inversion layer now reaches the drain continuously. This is triode operation, with no pinch-off point.

### Common mistakes

Raising $V_{DS}$ at fixed $V_G$ increases $V_{gap}$ and can move the pinch-off point toward the source. The sweep in this problem holds $V_{DS}$ fixed and raises $V_G$, which decreases $V_{gap}$.

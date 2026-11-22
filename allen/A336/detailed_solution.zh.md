# 详细步骤 - A336

对纯差模输入，电路分成两个相同的半边电路：每个差分对的公共源极（尾电流管 M5 和 M8 处）为交流地。于是每一级都是负载为两个漏源电阻的共源级，差模增益是两级增益之积。

### 第 1 步 — 小信号参数

所有器件都工作在饱和区。在 $I_D=50\ \mu$A、$W/L=10$ 下，用 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $r_{ds}=1/(\lambda I_D)$：

$$
g_{mN}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mP}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,
$$
$$
r_{dsN}=\frac1{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=500\ \mathrm{k\Omega},\qquad
r_{dsP}=\frac1{(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=400\ \mathrm{k\Omega},
$$
$$
r_{dsN}\parallel r_{dsP}=222.2\ \mathrm{k\Omega}.
$$

### 第 2 步 — 第一级

n 沟道差分对 M1–M2 驱动 p 沟道电流源负载 M3–M4。尾电流处为交流地时，每个输入管分到 $\pm v_{id}/2$，其漏极节点的负载为 $r_{ds1}\parallel r_{ds3}$，所以该级的差模增益为

$$
\frac{v_{d1}-v_{d2}}{v_{id}}=-g_{mN}(r_{dsN}\parallel r_{dsP})=-(331.7\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=-73.7 .
$$

### 第 3 步 — 第二级

p 沟道差分对 M6–M7 由 d1 和 d2 驱动，负载为 n 沟道电流沉 M9–M10；对差模信号，M8 处的公共源极节点为交流地。每一半都是负载为 $r_{ds6}\parallel r_{ds9}$ 的共源级：

$$
\frac{v_{out}^+-v_{out}^-}{v_{d1}-v_{d2}}=-g_{mP}(r_{dsN}\parallel r_{dsP})=-(223.6\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=-49.7 .
$$

其中 $v_{out}^+$ 是 M6 的漏极，M6 的栅极接 d1。

### 第 4 步 — 总差模增益

$$
A_{vd}=\frac{v_{od}}{v_{id}}=g_{mN}(r_{dsN}\parallel r_{dsP})\cdot g_{mP}(r_{dsN}\parallel r_{dsP})=(73.7)(49.7)=+3.66\times10^3\ \mathrm{V/V}\ (71.3\ \mathrm{dB}).
$$

按图中标注的极性，增益为正：$v_{in}^+$ 驱动 M1，M1 的漏极驱动 M6 的栅极，M6 的漏极是 $v_{out}^+$，两级各反相一次。该值是真正的差分输出增益；只取一个输出时为其一半。

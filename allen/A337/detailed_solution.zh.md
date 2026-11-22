# 详细步骤 - A337

对差模信号，输入对的公共源极为交流地，因此放大器分成两个半边电路，每个都是共源输入级后接 CMOS 反相器。差模增益是两级增益之积；唯一的新元件是反相器，其两个器件由同一栅压驱动。

### 第 1 步 — 小信号参数

所有器件都工作在饱和区，$I_D=50\ \mu$A，$W/L=10$；用 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $r_{ds}=1/(\lambda I_D)$：

$$
g_{mN}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mP}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,
$$
$$
r_{dsN}\parallel r_{dsP}=500\ \mathrm{k\Omega}\parallel400\ \mathrm{k\Omega}=222.2\ \mathrm{k\Omega}.
$$

### 第 2 步 — 第一级

n 沟道差分对加 p 沟道电流源负载，每个漏极的负载为 $r_{dsN}\parallel r_{dsP}$，得

$$
A_{v1}=g_{mN}(r_{dsN}\parallel r_{dsP})=(331.7\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=73.7 .
$$

### 第 3 步 — 输出反相器

每个反相器中 p 沟道和 n 沟道器件的栅极连在一起，所以栅极信号 $v_g$ 使两管的漏极电流在输出节点同向变化：n 沟道管多吸收 $g_{mN}v_g$，p 沟道管少提供 $g_{mP}v_g$。总输出电流为 $-(g_{mN}+g_{mP})v_g$，流入 $r_{dsN}\parallel r_{dsP}$：

$$
A_{v2}=(g_{mN}+g_{mP})(r_{dsN}\parallel r_{dsP})=(555.3\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=123.4 .
$$

### 第 4 步 — 总差模增益

每级各反相一次，所以总增益为正：

$$
A_{vd}=\frac{v_{od}}{v_{id}}=g_{mN}(r_{dsN}\parallel r_{dsP})\cdot(g_{mN}+g_{mP})(r_{dsN}\parallel r_{dsP})=(73.7)(123.4)=9.09\times10^3\ \mathrm{V/V}\ (79.2\ \mathrm{dB}).
$$

这约为第二级采用电流沉负载 p 沟道差分对的版本（$3.66\times10^3$ V/V）的 2.5 倍，因为推挽反相器把两个器件的跨导相加，而输出电阻不变。

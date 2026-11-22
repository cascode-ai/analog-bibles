# 详细步骤 - G078

只有负载失配；两个晶体管及其 $g_m$ 相同，且 $r_o\to\infty$，所以每个漏极电流只取决于栅极电压和尾节点电压，与负载无关。用半边电路的论证求出纯差模输入和纯共模输入下的漏极电流，再乘以不相等的负载，得到全部四个增益。记 $\bar R=(R_1+R_2)/2=10\ \mathrm{k\Omega}$，$\Delta R=R_1-R_2=0.2\ \mathrm{k\Omega}$。

### 第 1 步 — 差模输入时的漏极电流

加 $v_{i1}=v_{id}/2$、$v_{i2}=-v_{id}/2$。晶体管相同且 $r_o$ 无穷大时，漏极电流为 $g_m(v_{i1}-v_t)$ 和 $g_m(v_{i2}-v_t)$，其中 $v_t$ 为尾节点电压。尾节点的 KCL：二者之和流入 $r_{\text{tail}}$，

$$
g_m(v_{i1}+v_{i2}-2v_t)=\frac{v_t}{r_{\text{tail}}}\quad\xrightarrow{\;v_{i1}+v_{i2}=0\;}\quad v_t=0 .
$$

因此尾节点保持交流地，且

$$
i_{d1}=-i_{d2}=g_m\frac{v_{id}}2 .
$$

负载失配不影响这一点，因为 $r_o\to\infty$ 时负载不影响漏极电流。

### 第 2 步 — 差模输入下的增益

每个输出为 $v_{o}=-i_dR$（电源为交流地）：

$$
v_{o1}=-g_m\frac{v_{id}}2R_1,\qquad v_{o2}=+g_m\frac{v_{id}}2R_2 .
$$

$$
A_{dm}=\frac{v_{o1}-v_{o2}}{v_{id}}=-\frac{g_m(R_1+R_2)}2=-g_m\bar R=-(1\ \mathrm{mA/V})(10\ \mathrm{k\Omega})=-10,
$$

$$
A_{dm-cm}=\frac{(v_{o1}+v_{o2})/2}{v_{id}}=-\frac{g_m(R_1-R_2)}4=-\frac{(1\ \mathrm{mA/V})(0.2\ \mathrm{k\Omega})}4=-0.05 .
$$

### 第 3 步 — 共模输入时的漏极电流

加 $v_{i1}=v_{i2}=v_{ic}$。两个漏极电流相等，$i_d=g_m(v_{ic}-v_t)$，二者一起流入 $r_{\text{tail}}$：$v_t=2i_dr_{\text{tail}}$。因此每个器件都有 $2r_{\text{tail}}$ 的源极负反馈（source degeneration）：

$$
i_{d1}=i_{d2}=\frac{g_mv_{ic}}{1+2g_mr_{\text{tail}}},\qquad 1+2g_mr_{\text{tail}}=1+2(1\ \mathrm{mA/V})(1\ \mathrm{M\Omega})=2001 .
$$

### 第 4 步 — 共模输入下的增益

$$
A_{cm}=\frac{(v_{o1}+v_{o2})/2}{v_{ic}}=-\frac{g_m\bar R}{1+2g_mr_{\text{tail}}}=-\frac{10}{2001}=-5.0\times10^{-3},
$$

$$
A_{cm-dm}=\frac{v_{o1}-v_{o2}}{v_{ic}}=-\frac{g_m\Delta R}{1+2g_mr_{\text{tail}}}=-\frac{0.2}{2001}=-1.0\times10^{-4}.
$$

两个共模输入增益都被尾电阻抑制，而 $A_{dm-cm}=-0.05$ 不受抑制：无论 $r_{\text{tail}}$ 多大，差模输入都使两个漏极电流大小相等、方向相反，不相等的负载把它转换成共模输出。

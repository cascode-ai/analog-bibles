# 详细步骤 - A270

基准电流由两个串联在电源之间的二极管连接晶体管 M9 和 M8 决定；两管电流相同，因此它们的过驱动电压之比由各自的跨导参数确定，且两者之和必须等于电源电压减去两个阈值电压。M5 和 M7 再按宽长比复制 $I_8$。所有器件都饱和，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$，并忽略沟道长度调制。

### 第 1 步 — 两个二极管中的电流相等

二极管连接器件 $V_{DS}=V_{GS}$，处于饱和。取 $S_8=S_9=1$，$V_{ov}=|V_{GS}|-|V_T|$：

$$
I_8=\frac{K'_P}{2}S_9V_{ov9}^2=\frac{K'_N}{2}S_8V_{ov8}^2
\;\Rightarrow\;
V_{ov9}=\sqrt{\frac{K'_N}{K'_P}}\,V_{ov8}=\sqrt{\frac{110}{50}}\,V_{ov8}=1.483\,V_{ov8}.
$$

### 第 2 步 — 偏置支路的 KVL

两个栅源电压分享全部电源电压：

$$
V_{SG9}+V_{GS8}=V_{DD}-V_{SS}=3\ \mathrm V
\;\Rightarrow\;
V_{ov9}+V_{ov8}=3\ \mathrm V-0.7\ \mathrm V-0.7\ \mathrm V=1.6\ \mathrm V .
$$

与第 1 步联立：

$$
V_{ov8}=\frac{1.6\ \mathrm V}{1+1.483}=0.644\ \mathrm V\ (V_{GS8}=1.344\ \mathrm V),\qquad V_{ov9}=0.956\ \mathrm V .
$$

### 第 3 步 — 偏置电流与镜像电流

$$
I_8=\frac{K'_N}{2}S_8V_{ov8}^2=(55\ \mu\mathrm{A/V^2})(1)(0.644\ \mathrm V)^2=22.8\ \mu\mathrm A .
$$

M5、M7 与 M8 的 $V_{GS}$ 相同，电流与 $S$ 成正比：

$$
I_5=\frac{S_5}{S_8}I_8=2(22.8\ \mu\mathrm A)=45.7\ \mu\mathrm A,\qquad
I_7=\frac{S_7}{S_8}I_8=10(22.8\ \mu\mathrm A)=228\ \mu\mathrm A .
$$

这与放大器其余部分一致：$S_6/S_4=100/10=10=2S_7/S_5$，因此 M6 在 $V_{SG6}=V_{SG4}$ 时流过 $I_7$，符合饱和假设。
